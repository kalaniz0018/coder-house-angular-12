import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

export const userSchema = new Schema({
  user: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  isAdmin:{
    type: Boolean,
    required: true,
  },
  phone:{
    type: String
  }
}, {
    timestamps: true
});


