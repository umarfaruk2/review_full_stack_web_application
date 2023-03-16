import express from 'express';
import { create_review_controller, get_review_controller, get_my_review_controller, update_review_controller, delete_review_controller } from '../controllers/review.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const reviewRoute = express.Router();


reviewRoute.get('/my-review', verifyToken, get_my_review_controller);

reviewRoute.route('/')
	.post(verifyToken, create_review_controller)
	.get(get_review_controller)


reviewRoute.route('/:id')
	.patch(verifyToken, update_review_controller)
	.delete(verifyToken, delete_review_controller)


export default reviewRoute;