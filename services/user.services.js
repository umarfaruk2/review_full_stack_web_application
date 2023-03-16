import user_model from '../models/user.schema.js';

export const sign_up_service = async (data) => {
	const result = await user_model.create(data);
	return result;
}


export const find_user_service = async (data) => {
	const result = await user_model.findOne({email: data});
	return result;
}