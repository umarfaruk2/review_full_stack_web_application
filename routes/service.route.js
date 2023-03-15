import express from 'express';
import { create_service_controller, get_service_controller, get_limit_service_controller } from '../controllers/service.controller.js';
const serviceRoute = express.Router();


serviceRoute.get('/all', get_service_controller);

serviceRoute.route('/')
.post(create_service_controller)
.get(get_limit_service_controller)


export default serviceRoute;