'use client'
import Image from "next/image";
import Homee from "@/app/(pages)/home/page"
import Course from "@/app/components/ui/course"
import Goals from "@/app/components/ui/goals"
import Team from "@/app/components/ui/team"
import Page3 from "./components/ui/Page3";
 import Page2 from "./components/ui/page2";
import Testimonials from "./components/ui/Testimonials";
import Page5 from "./components/ui/Page5";

export default function Home() {
  return (
    <div>
      <Homee></Homee>
      {/* <Page2></Page2> 
      <Course></Course>*/}
      <Page2></Page2>
      <Page3></Page3>
      <Goals></Goals>
      {/*<Team></Team>*/}
      <Page5></Page5>
      <Testimonials></Testimonials>
      
    </div>
  );
}
