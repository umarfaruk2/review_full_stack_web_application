import mongoose from 'mongoose';
import validator from 'validator';

const user_schema = new mongoose.Schema({
	userName: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		required: [true, 'Please enter your email'],
		validate: [validator.isEmail, 'please provide valid email']
	}, 
	password: {
		type: String,
		required: [true, 'pleae enter your password']
	}
}, {
	timestamps: true
});


const user_model = mongoose.model('User', user_schema);

export default user_model;