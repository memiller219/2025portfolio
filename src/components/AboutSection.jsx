import React from "react";
import { Parallax } from "react-parallax";

import { FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { Code, Layers, Zap, MonitorSmartphone, Figma } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const icons = [
  { component: <FaReact color="#037da6" size="40px" />, label: "React" },
  {
    component: <FaJsSquare color="#037da6" size="40px" />,
    label: "JavaScript",
  },
  { component: <FaHtml5 color="#037da6" size="40px" />, label: "HTML" },
  { component: <FaCss3Alt color="#037da6" size="40px" />, label: "CSS" },
  { component: <FaNodeJs color="#037da6" size="40px" />, label: "Node.js" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#1C102F] grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto p-6 relative"
    >
      <motion.div
        style={{ y }}
        className="md:col-span-2 row-span-2 glass-tile p-6 flex flex-col justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold mb-2">Hi, I’m Michael 👋</h2>
          <p className="text-gray-300 text-md">
            Frontend Developer | UI/UX-Focused | Performance-Driven
          </p>
        </div>
        <p className="mt-4 text-gray-400 text-sm">
          I build sleek, accessible, and scalable web interfaces using
          <strong> React, TypeScript</strong>, and{" "}
          <strong>design systems</strong>. I thrive on clean code and
          pixel-perfect UIs — always with purpose.
        </p>
      </motion.div>

      {/* Tile Items */}
      {[
        {
          icon: <Code className="w-8 h-8 text-indigo-400" />,
          title: "Clean Code",
          desc: "Readable. Reusable. Maintainable.",
        },
        {
          icon: <Figma className="w-8 h-8 text-pink-400" />,
          title: "Design-Driven",
          desc: "Figma to Functional UI",
        },
        {
          icon: <MonitorSmartphone className="w-8 h-8 text-green-400" />,
          title: "Responsive",
          desc: "Every screen. Every time.",
        },
        {
          icon: <Zap className="w-8 h-8 text-yellow-400" />,
          title: "Performance",
          desc: "Speed is a feature.",
        },
        {
          icon: <Layers className="w-8 h-8 text-blue-400" />,
          title: "Component-Based",
          desc: "Scalable design patterns",
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          style={{ y }}
          className="glass-tile p-6 flex flex-col items-center justify-center text-center"
        >
          {item.icon}
          <h3 className="font-semibold mt-2">{item.title}</h3>
          <p className="text-xs text-gray-400">{item.desc}</p>
        </motion.div>
      ))}
    </section>
    // <section className=" bg-[#1C102F] grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto p-6">
    //   {/* Main About Box */}
    //   <div className="md:col-span-2 row-span-2 glass-tile flex flex-col justify-between p-6">
    //     <div>
    //       <h2 className="text-3xl font-bold mb-2">Hi, I’m Michael 👋</h2>
    //       <p className="text-gray-300 text-md">
    //         Frontend Developer | UI/UX-Focused | Performance-Driven
    //       </p>
    //     </div>
    //     <p className="mt-4 text-gray-400 text-sm">
    //       I build sleek, accessible, and scalable web interfaces using
    //       <strong> React, TypeScript</strong>, and{" "}
    //       <strong>design systems</strong>. I thrive on clean code and
    //       pixel-perfect UIs — always with purpose.
    //     </p>
    //   </div>

    //   {/* Tile: Clean Code */}
    //   <div className="glass-tile card-hover p-6 flex flex-col items-center justify-center text-center">
    //     <Code className="w-8 h-8 text-indigo-400 mb-2" />
    //     <h3 className="font-semibold">Clean Code</h3>
    //     <p className="text-xs text-gray-400">
    //       Readable. Reusable. Maintainable.
    //     </p>
    //   </div>

    //   {/* Tile: Design-Driven */}
    //   <div className="glass-tile p-6 flex flex-col items-center justify-center text-center">
    //     <Figma className="w-8 h-8 text-pink-400 mb-2" />
    //     <h3 className="font-semibold">Design-Driven</h3>
    //     <p className="text-xs text-gray-400">Figma to Functional UI</p>
    //   </div>

    //   {/* Tile: Responsive */}
    //   <div className="glass-tile p-6 flex flex-col items-center justify-center text-center">
    //     <MonitorSmartphone className="w-8 h-8 text-green-400 mb-2" />
    //     <h3 className="font-semibold">Responsive</h3>
    //     <p className="text-xs text-gray-400">Every screen. Every time.</p>
    //   </div>

    //   {/* Tile: Performance */}
    //   <div className="glass-tile p-6 flex flex-col items-center justify-center text-center">
    //     <Zap className="w-8 h-8 text-yellow-400 mb-2" />
    //     <h3 className="font-semibold">Performance</h3>
    //     <p className="text-xs text-gray-400">Speed is a feature.</p>
    //   </div>

    //   {/* Tile: Components */}
    //   <div className="glass-tile p-6 flex flex-col items-center justify-center text-center">
    //     <Layers className="w-8 h-8 text-blue-400 mb-2" />
    //     <h3 className="font-semibold">Component-Based</h3>
    //     <p className="text-xs text-gray-400">Scalable design patterns</p>
    //   </div>
    // </section>

    // <div id="about" className="py-24 sm:py-32 min-h-screen bg-[#140827]">
    //   <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
    //     <p
    //       data-aos="fade-in"
    //       data-aos-delay="300"
    //       className="mx-auto max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
    //     >
    //       About Me
    //     </p>
    //     <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1">
    //       <div
    //         data-aos="fade-right"
    //         data-aos-delay="300"
    //         className="relative lg:row-span-1"
    //       >
    //         <div className="absolute inset-px bg-[#E9EFF0]" />
    //         <div className="relative flex h-full flex-col overflow-hidden ">
    //           <div className="px-8 pt-5 pb-3 sm:px-10 sm:pt-10 sm:pb-10">
    //             <MdOutlinePhonelink color="#404F54" size="40px" />
    //             <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
    //               Web & Mobile App Development
    //             </p>
    //             <div className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
    //               <p>Lorem ipsum dolor sit amet consectetur adipisi</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div data-aos="fade-down" data-aos-delay="300" className="relative">
    //         <div className="absolute bg-[#E9EFF0] inset-px" />
    //         <div className="relative flex h-full flex-col overflow-hidden">
    //           <div className="px-8 pt-5 pb-3 sm:px-10 sm:pt-10 sm:pb-10">
    //             <IoCalendarOutline color="#404F54" size="40px" />
    //             <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
    //               Experience
    //             </p>
    //             <p className="mt-2 max-w-lg text-sm/6 text-black max-lg:text-center">
    //               <span className="font-bold text-6xl ">5+</span> Years
    //               Professional Experience
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div data-aos="fade-up" data-aos-delay="300" className="relative">
    //         <div className="absolute inset-px rounded-lg bg-white" />
    //         <div className="relative flex h-full flex-col overflow-hidden bg-[#E9EFF0]">
    //           <div className="px-8 pt-8 sm:px-10 sm:pt-10">
    //             <GoStack color="#404F54" size="40px" />
    //             <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 pb-8">
    //               My Tech Stack
    //             </p>
    //             <div className="flex justify-between">
    //               {icons.map((icon) => {
    //                 return <div key={icon.label}>{icon.component}</div>;
    //               })}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutSection;
