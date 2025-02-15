import Image from "next/image";
import Homee from "@/app/(pages)/home/page"
import Course from "@/app/components/ui/course"
import Goals from "@/app/components/ui/goals"
import Team from "@/app/components/ui/team"

 

export default function Home() {
  return (
    <div>
      <Homee></Homee>
      {/* <Page2></Page2> */}
      <Course></Course>
      <Goals></Goals>
      <Team></Team>

    </div>
  );
}
