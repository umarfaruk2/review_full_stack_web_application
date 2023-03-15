import express from 'express';
import { sign_up_controller, login_controller } from '../controllers/user.controller.js';

const userRoute = express.Router();

userRoute.post('/sign-up', sign_up_controller);
userRoute.port('/login', login_controller);


export default userRoute;