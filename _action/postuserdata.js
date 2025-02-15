"use server"
import Usermodel from '@/app/db/models/user'
import connectDB from '@/app/db/connectDb'
export async function saveuserdata(email, userdata) {
    try {
        await connectDB();
        const existingUser = await Usermodel.findOne({ email: email });
        if (existingUser) {
            // Update user data as per schema
            existingUser.name = userdata.name;
            existingUser.collage = userdata.college;
            existingUser.degree = userdata.degree;
            existingUser.year = userdata.year;
            existingUser.bio = userdata.bio;
            existingUser.branch = userdata.branch;
            existingUser.phoneNUmber = userdata.phoneNumber;
            existingUser.address = userdata.address;
            existingUser.properAddress = userdata.properAddress;
            existingUser.updatedAt = Date.now();

            await existingUser.save();
            console.log('User details updated');
            return "done";
        } else {
            console.log('User not found');
            return "user not found";
        }
    } catch (error) {
        console.error(error);
        return "error";
    }
}
    
