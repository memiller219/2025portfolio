import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive developer portfolio built with Next.js and Tailwind.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/images/portfolio.png",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and customers.",
    stack: ["React", "Chart.js", "Firebase"],
    image: "/images/dashboard.png",
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
        <span className="font-thin text-2xl">(and Broken, and Fixed)</span>
      </h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
