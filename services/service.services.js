import service_model from '../models/service.schema.js';

export const create_service = async (data) => {
	const result = await service_model.create(data);
	return result;
}


export const get_service = async (data) => {
	const result = await service_model.find({}).populate('reviews');
	return result;
}


export const get_limit_service = async (data) => {
	const result = await service_model.find({}).limit(3).populate('reviews');
	return result;
}
