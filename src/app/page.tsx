import About from "@/components/About";
import BlogCards from "@/components/BlogCard";
import CategorySection from "@/components/CategorySection";
import Client from "@/components/Client";
import HeroSection from "@/components/HeroSection";
import MeetOurChef from "@/components/MetOurChef";
import OurMenu from "@/components/OurMenu";
import Testimonials from "@/components/Testimonials";
import VideoActive from "@/components/VideoActive";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function Home() {
  return (
    <div className="bg-[#0D0D0D] px-[220px] w-full">
      <div className="space-y-52">
        <div>
          <HeroSection />
        </div>
        <div>
          <About />
        </div>
        <div>
          <CategorySection />
        </div>
        <div>
          <WhyChooseSection />
        </div>
        <div>
          <Client />
        </div>
        <div>
          <OurMenu />
        </div>
        <MeetOurChef />
        <Testimonials />
        <VideoActive />
        <BlogCards />
      </div>
    </div>
  );
}
