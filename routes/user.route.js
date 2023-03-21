import express from 'express';
import { sign_up_controller, login_controller, verify_user_controller } from '../controllers/user.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const userRoute = express.Router();

userRoute.post('/sign-up', sign_up_controller);
userRoute.post('/login', login_controller);

userRoute.get('/me', verifyToken, verify_user_controller);


export default userRoute;