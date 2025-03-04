"use server"
import CourseModel from '@/app/db/models/course'
import connectDB from '@/app/db/connectDb'
export async function deleteCourse(title, link) {
    try {
        await connectDB();
        const existingCourse = await CourseModel.findOne({ title: title, link: link });
        console.log('Course found:', existingCourse , title, link); 
        if (existingCourse) {
            // Delete course data as per schema
            await CourseModel.deleteOne({ _id: existingCourse._id });
            console.log('Course deleted');
            return "success";
        } else {
            console.log('Course not found');
            return "Course not found";
        }
    } catch (error) {
        console.error(error);
        return "error";
    }
}
    
