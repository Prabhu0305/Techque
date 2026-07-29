package controller

import (
	"context"
	"fmt"
	"golang-techque/database"
	"golang-techque/models"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var pastorderCollection *mongo.Collection = database.OpenCollection(database.Client, "pastorder")

// var validate = validator.New()

func GetPastOrders() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Implement logic to fetch all orders from the database for ADMIN
		ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)

		var allOrders []bson.M
		fmt.Println("Attempting to fetch orders...")
		result, err := pastorderCollection.Find(ctx, bson.M{})
		if err != nil {
			fmt.Println("Error fetching orders:", err) // Log error
			c.JSON(http.StatusInternalServerError, gin.H{"error": "error fetching orders"})
			return
		}

		defer cancel()

		// defer cursor.Close(ctx) // Close the cursor once processing is complete

		// Decode the orders into allOrders slice
		if err := result.All(ctx, &allOrders); err != nil {
			fmt.Println("Error decoding orders:", err) // Log detailed error
			c.JSON(http.StatusInternalServerError, gin.H{"error": "error decoding orders", "details": err.Error()})
			return
		}

		c.JSON(http.StatusOK, allOrders)
	}
}

func GetPastOrder() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Implement logic to fetch an order by its id from the database
		ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)

		var order models.Order
		orderId := c.Param("order_id")

		err := pastorderCollection.FindOne(ctx, bson.M{"order_id": orderId}).Decode(&order)

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "error fetching order"})
			return
		}

		defer cancel()
		c.JSON(http.StatusOK, order)
	}
}

func CreatePastOrder(order models.Order) (models.Order, error) {
	// return func(c *gin.Context) {

	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)

	order.Created_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))
	order.Updated_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))

	year, month, day := time.Now().Date()
	order.Order_Date = time.Date(year, month, day, 0, 0, 0, 0, time.Local)

	order.ID = primitive.NewObjectID()
	order.Order_id = order.ID.Hex() //hex to string

	_, err := pastorderCollection.InsertOne(ctx, order)

	if err != nil {
		// msg := fmt.Sprintf("error creating order: %v", err)
		// log(msg)
		// c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		return order, err
	}

	defer cancel()
	fmt.Println("Order successfully inserted into past orders collection.")
	// c.JSON(http.StatusOK, result)
	return order, err

}

func UpdatePastOrder() gin.HandlerFunc {
	return func(c *gin.Context) {

		ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)

		var order models.Order
		// var table models.Table // to check whether the table is available or not

		orderId := c.Param("order_id")

		err := c.BindJSON(&order)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		var updatedObj primitive.D

		// if order.Table_id != nil {
		// 	err := tableCollection.FindOne(ctx, bson.M{"table_id": order.Table_id}).Decode(&table)
		// 	if err != nil {
		// 		msg := fmt.Sprintf("table not found")
		// 		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		// 		defer cancel()
		// 		return
		// 	}
		// 	updatedObj = append(updatedObj, bson.E{Key: "table_id", Value: order.Table_id})
		// }

		order.Updated_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))

		updatedObj = append(updatedObj, bson.E{Key: "updated_at", Value: order.Updated_at})

		filter := bson.M{"food_id": orderId}

		upsert := true
		opt := options.UpdateOptions{
			Upsert: &upsert,
		}

		result, err := pastorderCollection.UpdateOne(
			ctx,
			filter,
			bson.D{{Key: "$set", Value: updatedObj}},
			&opt,
		)

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "error updating order"})
			defer cancel()
			return
		}

		defer cancel()
		c.JSON(http.StatusOK, result)

	}
}

func DeletePastOrder() gin.HandlerFunc {
	return func(c *gin.Context) {

	}
}

// func OrderItemOrderCreator(order models.Order) string {
// 	order.Created_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))
// 	order.Updated_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))
// 	order.ID = primitive.NewObjectID()
// 	order.Order_id = order.ID.Hex() //hex to string
// 	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)

// 	orderCollection.InsertOne(ctx, order)
// 	defer cancel()
// 	return order.Order_id
// }
