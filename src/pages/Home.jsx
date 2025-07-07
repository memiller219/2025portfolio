import { useEffect } from "react";
import { Parallax } from "../components/Parallax";
import { Navbar } from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import ParallaxHero from "../components/ParallaxHero";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className=" text-foreground ">
      <Navbar />
      <main>
        <Parallax offset={200} speed={0.8}>
          <ParallaxHero />
        </Parallax>
        <Parallax offset={600} speed={0.6}>
          <AboutHero />
        </Parallax>
        <Parallax offset={800} speed={0.4}>
          <SkillsSection />
        </Parallax>
        <Parallax offset={1200} speed={0.2}>
          <ProjectsSection />
        </Parallax>
      </main>

      {/* {Footer} */}
    </div>
  );
};
