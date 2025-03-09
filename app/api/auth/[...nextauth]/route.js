import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
// import connectDb from '@/app/db/connectDb';
// import User from '@/app/models/user';
import mongoose from "mongoose";
import { redirect } from 'next/headers';
import User from "@/app/db/models/user"
import connectDb from "@/app/db/connectDb"
import GoogleProvider from "next-auth/providers/google";


let url = process.env.MONGO_URI;




const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.NEXTAUTH_ID,
        clientSecret: process.env.NEXTAUTH_SECRET
      }),
      GoogleProvider({
        clientId: process.env.NEXTAUTH_google_id,
        clientSecret: process.env.NEXTAUTH_google_secret,
      }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
       if(account.provider == "github") { 
        
        connectDb();

       
           // Check if the user already exists in the database
          const currentUser = await User.findOne({ email: user.email });  
            if(!currentUser){
            // Create a new user
            //  await User.create({
            //   email: user.email, 
            //   username: user.email.split("@")[0], 
            // })   

            const newUser = new User({
              email: user.email, 
              username: user.email.split("@")[0], 
            });
            newUser.save().then((status) => {  
              console.log('User saved:', status);
              // return redirect("/");
              
              // return true;
                // Redirect to the user's profile page after saving
                // res.redirect(`/user/${user.email.split("@")[0]}`);
              }).catch((error) => {  
              console.error('Error saving user:', error);
              });
            
          } 
          return true
         }

        else if(account.provider == "google") { 
        
          connectDb();
  
         
             // Check if the user already exists in the database
            const currentUser = await User.findOne({ email: user.email });  
              if(!currentUser){
              // Create a new user
              //  await User.create({
              //   email: user.email, 
              //   username: user.email.split("@")[0], 
              // })   
  
              const newUser = new User({
                email: user.email, 
                username: user.email.split("@")[0], 
              });
              newUser.save().then((status) => {  
                console.log('User saved:', status);
                // return redirect("/");
                // return true;
                  // Redirect to the user's profile page after saving
                  // res.redirect(`/user/${user.email.split("@")[0]}`);
                }).catch((error) => {  
                console.error('Error saving user:', error);
                });
              
            } 
            return true
           }
      },
    
    async session({ session, user, token }) {
      const dbUser = await User.findOne({email: session.user.email})
      session.user.name = dbUser.username
      return session
    },
  } 

})

export {handler as GET, handler as POST}