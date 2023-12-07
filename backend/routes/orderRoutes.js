import express from 'express';
const router = express.Router();
import { 
    addOrderItems,
    getMyOrders,
    getOrderById,
    UpdateOrderToPaid,
    UpdateOrderToDelivered,
    GetOrders,
 } from '../controllers/orderController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems).get(protect, admin, GetOrders);
router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, UpdateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, UpdateOrderToDelivered);

export default router;