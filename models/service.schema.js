import mongoose from 'mongoose';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;


const service_schema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'please enter your service name'],
		trim: true
	},
	imageUrl: {
		type: String,
		required: [true, 'please enter a image url'],
		validate: [validator.isURL, 'please enter a valid url']
	},
	rating: {
		type: Number
	},
	price: {
		type: Number,
		requied: true
	},
	description: {
		type: String,
		required: [true, 'please provice a description'],
		minLength: 20,
		maxLength: 300
	},
	reviews: [{
		type: ObjectId,
		ref: "Review" 
	}]
}, {
	timestamps: true
});


const service_model = mongoose.model('Service', service_schema);

export default service_model;