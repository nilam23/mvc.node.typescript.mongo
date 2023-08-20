import { Document, Schema, model } from 'mongoose';
import { IUser } from '../../interfaces/users/user.interface';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = model<IUser & Document>('users', UserSchema);
