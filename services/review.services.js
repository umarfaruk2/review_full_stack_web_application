import review_model from '../models/review.schema.js';

export const create_review_service = async (data) => {
	const result = await review_model.create(data);
	return result;
}


export const get_review_service = async () => {
	const result = await review_model.find({});
	return result;
}


export const get_my_review_service = async (email) => {
	const result = await review_model.find({email: email});
	return result;
}


export const update_review_service = async (id, data) => {
	const result = await review_model.updateOne({_id: id}, data, {
		runvalidator: true
	});
	return result;
}

export const delete_review_service = async (id) => {
	const result = await review_model.deleteOne({_id: id});
	return result;
}