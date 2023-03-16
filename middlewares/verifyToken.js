import jwt from 'jsonwebtoken';
import { promisify } from 'util';


const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers?.authorization?.split(' ')[1];

		if(!token) {
			res.status(403).json({
				status: 'fail',
				message: 'you are not a authorize user'
			})
		}

		req.user = await promisify(jwt.verify)(token, process.env.SECRET_KEY);
		next();
	} catch(error) {
		next(error);
	}	
}

export default verifyToken;