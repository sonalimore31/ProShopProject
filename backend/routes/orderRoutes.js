import express from "express"
import Order from "../models/orderModel.js"
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from "../controllers/orderController.js"
import { protect } from "../middleware/authMiddleware.js"

router.route("/").post(protect, addOrderItems)
router.route("/:id").get(protect, getOrderById)
router.route("/:id/pay").put(protect, updateOrderToPaid)
router.route("/myorders").get(getMyOrders)
export default router
