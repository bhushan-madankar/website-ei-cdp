// "use server"
// import Usermodel from '@/app/db/models/user'
// import connectDB from '@/app/db/connectDb'


// export async function addresponse(email, amount) {
//     console.log("reach",email, amount)
//     try {
//         await connectDB();
//         const existingUser = await Usermodel.findOne({ email: email });
//         if (existingUser) {
//             if (!existingUser.Response) {
//                 existingUser.Response = 0;
//             }
//             if (amount === 0) {
//                 existingUser.Response += 5;
//             } else if (amount === 19900) {
//                 existingUser.Response += 20;
//             } else if (amount === 44900) {
//                 existingUser.Response += 50;
//             } else if (amount === 190000) {
//                 existingUser.Response += 250;
//             }

//             await existingUser.save();
//             console.log(existingUser);
//             return JSON.stringify(existingUser);
//         } else {
//             console.log('User not found');
//             return null;
//         }
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }
