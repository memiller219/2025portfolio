import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Layers, Cpu, Database, Figma } from "lucide-react";
import GeometricParallax from "./GeometricParallax";

const skills = [
  { icon: <Code />, label: "JavaScript / TypeScript" },
  { icon: <Smartphone />, label: "Responsive Design" },
  { icon: <Layers />, label: "Component Architecture" },
  { icon: <Figma />, label: "Figma to Code" },
  { icon: <Cpu />, label: "React / Next.js" },
  { icon: <Database />, label: "API Integration" },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Fade title out once tiles start covering it
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-6 max-w-6xl mx-auto"
    >
      <GeometricParallax />

      {/* Sticky Title */}
      <motion.h2
        style={{ opacity }}
        className="text-4xl font-bold text-center sticky top-[70vh] z-0 pointer-events-none"
      >
        What I Use <span className="font-light text-2xl">(so far...)</span>
      </motion.h2>

      {/* Scrollable Tiles */}
      <div className="mt-[10vh] grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-[#00FFF4] mb-2">{skill.icon}</div>
            <p className="text-gray-300 text-sm">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
