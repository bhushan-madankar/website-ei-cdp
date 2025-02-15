"use server"
import Usermodel from '@/app/db/models/user'
import connectDB from '@/app/db/connectDb'


export async function adminOverdata() {
    try {
        await connectDB();
        const existingUser = await Usermodel.find({});
        if (existingUser) {
            console.log(existingUser)
            return    JSON.stringify(existingUser);
        } else {
            console.log('User not found');
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}
