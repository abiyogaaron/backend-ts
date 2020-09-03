import { Request, Response } from 'express';
import User from './user.model';

export const create = async (req: Request, res: Response) => {
  console.log("req: ", req.body);
  const body = req.body;

  try{
    const response = await User.create(body);
    return res.status(200).json({success: response});
  }catch(err){
    return res.status(500).json({message: "theres somethings wrong in the server"})
  }
}
