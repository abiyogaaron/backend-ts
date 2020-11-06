import { Document, model, Schema} from "mongoose"

interface IUserSchema extends Document{
  nim: string;
  password: string;
  salt: string;
  name: string;
  score: number;
  class: string;
  created: Date;
  updated: Date;
}

const UserSchema = new Schema({
  nim: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  salt:{
    type: String,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  score: {
    type: Number
  },
  class: {
    type: String,
    required: true,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
})

UserSchema.pre<IUserSchema>("save", function(next){
  if(!this.isNew){
    this.updated = new Date();
  }
  next();
});

export default model<IUserSchema>('User', UserSchema);