import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongo_url = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASS}@cluster0.ij0ac.mongodb.net/?retryWrites=true&w=majority`;


const dbConnection = async () => {
	try {
		const DB_OPTIONS = {
			dbName: "reviewWebApp"
		}

		mongoose.set('strictQuery', true);
		await mongoose.connect(mongo_url, DB_OPTIONS);
		console.log('db connected successfully');
	} catch(error) {
		console.log(error);
	} 
}

export default dbConnection;