import { create_review_service, get_review_service, get_my_review_service, update_review_service, delete_review_service } from '../services/review.services.js';
import service_model from '../models/service.schema.js';

export const create_review_controller = async (req, res, next) => {
	try {
		const create_review = await create_review_service(req.body);
		const {_id, service } = create_review;

		await service_model.updateOne({_id: service}, {
			$push: { reviews: _id }
		}, {
			runvalidator: true
		})

		res.status(200).json({
			status: 'success',
			data: 'create review successfully'
		})	
	} catch(error) {
		next(error);
	}
}

export const get_review_controller = async (req, res, next) => {
	try {
		const get_review = await get_review_service();

		res.status(200).json({
			status: 'success',
			data: get_review
		})	
	} catch(error) {
		next(error);
	}
}


export const update_review_controller = async (req, res, next) => {
	try {
		const { id } = req.params;
		const update_review = await update_review_service(id, req.body);

		res.status(200).json({
			status: 'success',
			data: update_review
		})	
	} catch(error) {
		next(error);
	}
}

export const get_my_review_controller = async (req, res, next) => {
	try {
		const { email } = req.query;
		console.log(email)
		const my_review = await get_my_review_service(email);

		res.status(200).json({
			status: 'success',
			data: my_review
		})	
	} catch(error) {
		next(error);
	}
}


export const delete_review_controller = async (req, res, next) => {
	try {
		const { id } = req.params;
		const delete_review = await delete_review_service(id);

		res.status(200).json({
			status: 'success',
			data: delete_review
		}) 
	} catch(error) {
		next(error);
	}
}


