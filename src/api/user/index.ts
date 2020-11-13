
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
userRouter.get('/', index);
userRouter.put('/:id', update);
userRouter.delete('/:id', remove);

export default userRouter;