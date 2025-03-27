import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  getAllOrders,
  userOrders,
  updateOrderStatus,
  verifyStripePayment,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/list", adminAuth,getAllOrders);
orderRouter.post("/status", adminAuth,updateOrderStatus);


// payment features

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorPay',authUser,placeOrderRazorpay)

// user Feature
orderRouter.post("/userOrders",authUser,userOrders)


// verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripePayment)

export default orderRouter