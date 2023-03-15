import { sign_up_service, login_service } from '../services/user.services.js';


export const sign_up_controller = async (req, res, next) => {
	try {
		const create_user = await sign_up_service(req.body);

		res.status(200).json({
			status: 'success',
			data: 'user create successfully'
		})
	} catch(error) {
		next(error);
	}
}


export const login_controller = async (req, res, next) => {
	try {
		
	} catch(error) {
		next(error);
	}
}