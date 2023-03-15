import { create_service, get_service, get_limit_service } from '../services/service.services.js';

export const create_service_controller = async (req, res, next) => {
	try {
		const create_service_res = await create_service(req.body);

		res.status(200).json({
			status: 'success',
			data: "create new service successfully"
		})
	} catch(error) {
		next(error);
	}
}


export const get_service_controller = async (req, res, next) => {
	try {
		const get_service_res = await get_service();

		res.status(200).json({
			status: 'success',
			data: get_service_res
		})
	} catch(error) {
		next(error);
	}
}


export const get_limit_service_controller = async (req, res, next) => {
	try {
		const get_service_res = await get_limit_service();

		res.status(200).json({
			status: 'success',
			data: get_service_res
		})
	} catch(error) {
		next(error);
	}
}
