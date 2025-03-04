import Image from "next/image";
import Homee from "@/app/(pages)/home/page"
import Course from "@/app/components/ui/course"
import Goals from "@/app/components/ui/goals"
import Team from "@/app/components/ui/team"
import Reviewtips from "@/app/components/ui/reviewtips"
import Eiabout from "@/app/components/ui/eiabout";
import Footer from "@/app/components/ui/footer"
 

export default function Home() {
  return (
    <div>
      <Homee />
      <Reviewtips />
      <Course />
      <Goals />
      <Eiabout/>
      <Team />
      <Footer />
    </div>
  );
}
