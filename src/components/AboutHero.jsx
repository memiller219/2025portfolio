import { motion } from "framer-motion";
import ParallaxBackground from "./ParallaxBackground";
import GeometricParallax from "./GeometricParallax";
import BottomGradient from "./BottomGradient";

export default function AboutHero() {
  return (
    <section className="relative px-8 lg:px-auto h-screen flex items-center justify-center overflow-hidden">
      <GeometricParallax />
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative backdrop-blur-md border border-white/20 rounded-3xl shadow-xl max-w-xl p-10 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Commit. Push. Repeat.</h1>
        <p className="text-gray-300 mb-6">
          Frontend Developer <span className="text-2xl text-[#00fff4]">|</span>{" "}
          UI/UX‑Focused <span className="text-2xl text-[#00fff4]">|</span>{" "}
          Performance‑Driven
          <br />I transform Figma designs into sleek, scalable React &
          TypeScript interfaces.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-indigo-600/40 hover:bg-indigo-600 text-white font-medium rounded-full transition"
        >
          See My Work
        </a>
      </motion.div>
      <BottomGradient />
    </section>
  );
}
