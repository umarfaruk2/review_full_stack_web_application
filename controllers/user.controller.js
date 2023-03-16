import { sign_up_service, find_user_service } from '../services/user.services.js';
import bcrypt from 'bcrypt';
import genToken from '../utils/genToken.js';


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
		const { email, password } = req.body;	
		
		if(!email || !password) {
			res.status(400).json({
				status: 'fail',
				message: 'Please enter your email and password'
			})
		} else {
			const user = await find_user_service(email);
			if(!user) {
				res.status(403).json({
					status: 'fail',
					message: 'Your not authorize user please sign up first and login'
				})
			} else {
				const comPass = bcrypt.compareSync(password, user.password);
				if(!comPass) {
					res.status(400).json({
						status: 'fail',
						message: 'Please provide your valid email or password'
					})
				} else {
					const token = genToken(user);

					res.cookie('accessToken', token, {
						httpOnly: true, 
						maxAge: 24*60*60*1000
					})
					const {password: pwt, ...others } = user.toObject();
					res.status(200).json({
						status: 'success',
						data: {
							user: others,
							token
						}
					})
				}
			}
		}	
	} catch(error) {
		next(error);
	}
}


export const verify_user_controller = async (req, res, next) => {
	try {
		const user = await find_user_service(req.user?.eamil);
		res.status(200).json({
			status: 'success',
			data: user
		})
	} catch(error) {
		next(error);
	}
}


export const logout_controller = async (req, res, next) => {
	try {
		res.clearCookie('accessToken');
		res.status(200).json({
			status: 'success',
			message: 'user logout successfully'
		})
	} catch(error) {
		next(error);
	}	
}