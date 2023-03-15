import mongoose from 'mongoose';
import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;

const review_schema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String,
		validate: [validator.isURL, 'please provide a valid url']
	},
	reviewText: {
		type: String,
		requied: [true, 'please enter your review'],
		trim: true
	},
	reviewRating: {
		type: Number,
		requied: [true, 'please enter your review ratring']
	},
	service: {
		type: ObjectId,
		ref: 'Service',
		requied: true
	}
}, {
	timestamps: true
});

const review_model = mongoose.model('Review', review_schema);

export default review_model;