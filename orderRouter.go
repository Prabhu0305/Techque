package routes

import (
	controller "golang-techque/controllers"

	"github.com/gin-gonic/gin"
)

func OrderRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.GET("/orders", controller.GetOrders())
	incomingRoutes.GET("/orders/:order_id", controller.GetOrder())
	incomingRoutes.POST("/orders", controller.CreateOrder())
	incomingRoutes.PATCH("/orders/:order_id", controller.UpdateOrder())
	incomingRoutes.DELETE("/orders/:order_id", controller.DeleteOrder())

	//Queuing system
	incomingRoutes.GET("/orders/queue", controller.GetQueues())
	incomingRoutes.GET("/orders/queue/:queue_id", controller.GetQueue())
	incomingRoutes.POST("/orders/queue", controller.CreateQueue())
	incomingRoutes.PATCH("/orders/queue/:queue_id/total_orders", controller.UpdateQueue())
	incomingRoutes.PATCH("/orders/queue/:queue_id/current_order", controller.UpdateQueueOrder()) //creating queue by admin

	//Getting past Orders
	incomingRoutes.GET("/orders/past", controller.GetPastOrders())
	incomingRoutes.GET("/orders/past/:order_id", controller.GetPastOrder())
	incomingRoutes.PATCH("/orders/past/:order_id", controller.UpdatePastOrder())

	// incomingRoutes.PATCH("/orders/queue/:queue_id", controller.UpdateQueue());
	//updating queue by admin
}

//done
