import { Document, model, Schema} from "mongoose"

interface IUserSchema extends Document{
  nim: string;
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
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  class: {
    type: String,
    required: true
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