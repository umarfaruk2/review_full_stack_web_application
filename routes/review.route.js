import express from 'express';
import { create_review_controller, get_review_controller, get_my_review_controller, update_review_controller, delete_review_controller } from '../controllers/review.controller.js';

const reviewRoute = express.Router();


reviewRoute.get('/my-review', get_my_review_controller);

reviewRoute.route('/')
	.post(create_review_controller)
	.get(get_review_controller)


reviewRoute.route('/:id')
	.patch(update_review_controller)
	.delete(delete_review_controller)


export default reviewRoute;