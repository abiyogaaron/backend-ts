
import express from 'express';
import * as middleware from '../../middleware';
import {
  create
} from './user.controller';

let userRouter = express.Router();

userRouter.post('/', create);

export default userRouter;