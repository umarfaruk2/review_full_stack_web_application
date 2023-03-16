import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

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


user_schema.pre('save', function(next){
	const password = this.password;
	const hashPass = bcrypt.hashSync(password, 10);

	this.password = hashPass;
	next();
})


const user_model = mongoose.model('User', user_schema);

export default user_model;