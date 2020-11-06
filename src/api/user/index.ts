
import express from 'express';
import * as middleware from '../../middleware';
import {
  register,
  signin,
  index
} from './user.controller';

let userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/signin', signin);
userRouter.get('/', middleware.isAuthenticated, index);

export default userRouter;