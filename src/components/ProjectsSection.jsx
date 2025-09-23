import { motion } from "framer-motion";
import hiraKata from "../assets/hiraKata1.png";
import travel from "../assets/travel.png";
import dashboard from "../assets/dashboard.png";
import aircall from "../assets/aircall.png";

// ✅ Finished projects
const finishedProjects = [
  {
    title: "Podcast Page Mockup",
    description:
      "A clean, mobile-friendly landing page, designed to highlight new episodes and allow for testing new ideas.",
    stack: ["React", "TailwindCSS", "Storyblok CMS"],
    image: aircall,
    demoLink: "https://memiller219.github.io/aircallpodcast/podcast",
  },
  {
    title: "Hira-Kata",
    description:
      "A version of the classic memory game but for Japanese hiragana & katakana. Vanilla JS, HTML & CSS (back to the basics.)",
    stack: ["HTML", "Javascript", "CSS"],
    image: hiraKata,
    demoLink: "https://memiller219.github.io/Hira-Kata/",
  },
];

// 🚧 Projects under construction
const underConstruction = [
  {
    title: "Travel Planner",
    description:
      "A modern, responsive travel destination website built with Next.js and Tailwind.",
    stack: ["Next.js", "Tailwind", "Google Maps", "PostgreSQL"],
    image: travel,
    demoLink: "#",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and customers.",
    stack: ["NextJS", "Node", "AWS", "PostgreSQL"],
    image: dashboard,
    demoLink: "#", // add your link
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden pt-40 py-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Things I've Built{" "}
        <span className="font-thin text-2xl">(and Fixed, or Improved)</span>
      </h2>
      <div className="space-y-12 mb-20">
        {finishedProjects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-xl hover:scale-102 hover:border-[#00FFF4] transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 h-[180px] rounded-xl shadow-md object-cover"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 my-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600/20 text-indigo-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 px-4 py-2 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer">
                  View Demo
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-12 text-center">
        🚧 Under Construction{" "}
        <span className="font-thin text-xl">Remodelling in Progress</span>
      </h2>
      <div className="space-y-12">
        {underConstruction.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg opacity-60"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 h-[180px] rounded-xl shadow-md object-cover grayscale"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-400">
                {project.title}
              </h3>
              <p className="text-gray-500 my-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                disabled
                className="mt-4 px-4 py-2 rounded-lg font-medium bg-gray-700 text-gray-400 cursor-not-allowed"
                title="Demo coming soon 🚧"
              >
                Demo Unavailable
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
