"use server"
import CourseModel from '@/app/db/models/course'
import connectDB from '@/app/db/connectDb'
export async function addcourse(course) {
    try {
        await connectDB();
        const newCourse = new CourseModel({
            imgSrc: course.imgSrc,
            altText: course.altText,
            title: course.title,
            description: course.description,
            note: course.note,
            link: course.link,
        });
        const status = await newCourse.save();
        console.log('Course saved:', status);
        return "success";
    } catch (error) {
        console.error('Error connecting to the database or saving course:', error);
    }
}