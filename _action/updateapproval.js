"use server"
import Usermodel from '@/app/db/models/user'
import connectDB from '@/app/db/connectDb'
export async function updateapproval(userapprovedArray) {
    try {
        await connectDB();

        for (const userapproved of userapprovedArray) {
            const { email, approved } = userapproved;
            const existingUser = await Usermodel.findOne({ email: email });
            if (existingUser) {
                // Update user data as per schema
                existingUser.approved = approved;
                await existingUser.save();
                console.log(`User ${email} details updated`);
            } else {
                console.log(`User ${email} not found`);
            }
        }
        return "success";
    } catch (error) {
        console.error(error);
        return "error";
    }
}
    
