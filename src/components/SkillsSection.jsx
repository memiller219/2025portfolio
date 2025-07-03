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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.2, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative py-32 px-6 max-w-6xl mx-auto">
      <GeometricParallax />
      <motion.h2
        style={{ opacity }}
        className="text-4xl font-bold text-center sticky top-24 z-10"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 z-0 relative">
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
