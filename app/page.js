'use client'
import Image from "next/image";
import Homee from "@/app/(pages)/home/page"
import Course from "@/app/components/ui/course"
import Goals from "@/app/components/ui/goals"
import Team from "@/app/components/ui/team"
<<<<<<< HEAD
import Reviewtips from "@/app/components/ui/reviewtips"
import Eiabout from "@/app/components/ui/eiabout";
import Footer from "@/app/components/ui/footer"
 
=======
import Page3 from "./components/ui/Page3";
 import Page2 from "./components/ui/page2";
import Testimonials from "./components/ui/Testimonials";
import Page5 from "./components/ui/Page5";
>>>>>>> a17771cec508dc7aa1098ab25ddb96f03bf93048

export default function Home() {
  return (
    <div>
<<<<<<< HEAD
      <Homee />
      <Reviewtips />
      <Course />
      <Goals />
      <Eiabout/>
      <Team />
      <Footer />
=======
      <Homee></Homee>
      {/* <Page2></Page2> 
      <Course></Course>*/}
      <Page2></Page2>
      <Page3></Page3>
      <Goals></Goals>
      {/*<Team></Team>*/}
      <Page5></Page5>
      <Testimonials></Testimonials>
      
>>>>>>> a17771cec508dc7aa1098ab25ddb96f03bf93048
    </div>
  );
}

// delete this comment if giving error
