import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="relative z-10 bg-[#00172a] border-t border-white/10 backdrop-blur-md py-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
      >
        {" "}
        <div className="flex items-center mb-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 189 192"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 153.5L23.5 174.5V55.5L95.5 124.5L167 55.5V174.5L188.5 153.5V2L95.5 94L1 2V153.5Z"
              fill="#00FFF4"
              stroke="#00FFF4"
            />
            <path
              d="M146 139.5L95.5 190.5L44 139.5V112L95.5 160.5L146 112V139.5Z"
              fill="#00FFF4"
              stroke="#00FFF4"
            />
          </svg>
        </div>
        <div className="flex space-x-6">
          <div className="mb-4 md:mb-0 font-light">
            © {new Date().getFullYear()} Michael Miller. All rights reserved.
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
