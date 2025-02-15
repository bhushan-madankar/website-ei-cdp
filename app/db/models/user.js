import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String},
    username: { type: String, required: true },
    profilepic: {type: String},
    coverpic: {type: String},
    approved: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },
    collage: { type: String },
    degree: { type: String },
    year: { type: String },
    bio: { type: String },
    branch: { type: String },
    phoneNUmber: { type: String },
    address: { type: String },
    properAddress: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    });

const Usermodel = models.User || model("User", UserSchema);   
 
export default Usermodel ;