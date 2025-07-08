import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { FaLink, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 max-w-6xl mx-auto text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Let’s Make It{" "}
        <span className="text-[#00FFF4] font-light">Official</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center z-10">
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/michaelmiller219"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl flex flex-col items-center text-center hover:scale-105 hover:border-[#00FFF4] transition-transform duration-300"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin className="text-[#00FFF4] mb-2" size={32} />
          <p className="text-gray-300 text-sm">Connect on LinkedIn</p>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:memiller219@gmail.com"
          className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl flex flex-col items-center text-center hover:scale-105 hover:border-[#00FFF4] transition-transform duration-300"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <MdOutlineMail className="text-[#00FFF4] mb-2" size={32} />
          <p className="text-gray-300 text-sm">Send Me an Email</p>
        </motion.a>
      </div>
    </section>
  );
}
