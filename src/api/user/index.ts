
import express from 'express';
import * as middleware from '../../middleware';
import {
  register,
  signin,
  index,
  update,
  remove
} from './user.controller';

let userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/signin', signin);
userRouter.get('/', middleware.isAuthenticated, index);
userRouter.put('/:id', middleware.isAuthenticated, update);
userRouter.delete('/:id', middleware.isAuthenticated, remove);

export default userRouter;