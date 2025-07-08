import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Layers, Cpu, Database } from "lucide-react";
import GeometricParallax from "./GeometricParallax";
import { FaFigma } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";

const skills = [
  {
    icon: <IoCodeSlashOutline className="text-2xl" />,
    label: "Clean. Readable. Scalable",
  },
  { icon: <Smartphone />, label: "Responsive Design" },
  { icon: <Layers />, label: "Component Architecture" },
  { icon: <GoPeople className="text-2xl" />, label: "UI / UX" },
  { icon: <Cpu />, label: "Strategy & Planning" },
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
      className="relative py-40 px-6 max-w-6xl mx-auto"
    >
      <GeometricParallax />
      <motion.h2
        style={{ opacity }}
        className="text-4xl font-bold text-center sticky top-[60vh] z-0 pointer-events-none"
      >
        Stuff I'm pretty good at
      </motion.h2>

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
