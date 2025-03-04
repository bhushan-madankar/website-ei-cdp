import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const CourseSchema = new Schema({
    imgSrc: { type: String, required: true },
    altText: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    note: { type: String, required: true },
    link: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const CourseModel = models.Course || model("Course", CourseSchema);

export default CourseModel;
