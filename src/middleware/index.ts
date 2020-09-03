import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../environment';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  console.log("-------HEADERS------\n", req.headers);
  if(req.headers.hasOwnProperty('authorization')){
    const token = req.headers.authorization || '';

    try{
      const decoded = await jwt.verify(token, config.secret_key);
      if(decoded.hasOwnProperty('data')){
        next();
      }
      return res.status(401).json({message: "Unauthorized !"});
    }catch(err){
      console.log("----middleware-err----\n", err);
      return res.status(500).json({message: "middleware error !"});
    }
  }
  return res.status(401).json({message: "Unauthorized !"});
}
