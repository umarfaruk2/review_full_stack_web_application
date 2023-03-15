import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dbConnection from './config/dbConnection.js';
import serviceRoute from './routes/service.route.js'; 
import reviewRoute from './routes/review.route.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cookieParser());
app.use(cors({
	origin: "http://localhost:3000",
	credentials: true
}));
app.use(express.json());

// db
dbConnection();

// routers
app.use('/api/v1/service', serviceRoute);
app.use('/api/v1/review', reviewRoute);

// 404 error handle
app.use((req, res, next) => {
	next('url is not correct!');
})

// global error handle
app.use((err, req, res, next) => {
	if(!res.headersSend) {
		if(err.message) {
			res.status(500).json({
				status: 'fail',
				message: err.message
			})
		} else {
			res.status(404).json({
				status: 'fail',
				message: "something is wrong or url is not correct"
			})
		}
	} else {
		next("something is wrong");
	}
})


app.listen(port, () => console.log('app is ruing'));