"use server"
import CourseModel from '@/app/db/models/course'
import connectDB from '@/app/db/connectDb'

export async function getCourses() {
    try {
        await connectDB();
        const courses = await CourseModel.find({});
        console.log('Courses fetched:', courses);
        return courses.length ? JSON.stringify(courses) : [];
    } catch (error) {
        console.error('Error connecting to the database or fetching courses:', error);
        return [];
    }
}
