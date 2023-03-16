import jwt from 'jsonwebtoken';

const genToken = (user) => {
	const payload = {
		email: user.email
	}

	const token = jwt.sign(payload, process.env.SECRET_KEY, {
		expiresIn: '1m'
	})

	return token;
}


export default genToken;