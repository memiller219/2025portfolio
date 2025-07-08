// Updated NavLogoButton.jsx with stroke restoration after hover
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function NavLogoButton() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.a
      href="#home"
      className="group block w-10 h-10"
      initial="hidden"
      animate={controls}
      onHoverStart={() => controls.start("hover")}
      onHoverEnd={() => controls.start("hover")}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        viewBox="0 0 200 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <motion.path
          d="M1 153.5L23.5 174.5V55.5L95.5 124.5L167 55.5V174.5L188.5 153.5V2L95.5 94L1 2V153.5Z"
          stroke="#00FFF4"
          strokeWidth="2"
          fill="transparent"
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: { duration: 3, ease: "easeInOut" },
            },
            hover: {
              pathLength: 0.8,
              transition: { duration: 0.4 },
              transitionEnd: { pathLength: 1 },
            },
          }}
        />
        <motion.path
          d="M146 139.5L95.5 190.5L44 139.5V112L95.5 160.5L146 112V139.5Z"
          stroke="#00FFF4"
          strokeWidth="2"
          fill="transparent"
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: { duration: 2.2, ease: "easeInOut", delay: 0.3 },
            },
            hover: {
              pathLength: 0.85,
              transition: { duration: 0.4 },
              transitionEnd: { pathLength: 1 },
            },
          }}
        />
        <motion.path
          d="M1 153.5L23.5 174.5V55.5L95.5 124.5L167 55.5V174.5L188.5 153.5V2L95.5 94L1 2V153.5Z"
          fill="#00FFF4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, delay: 2 } },
            hover: {
              opacity: 0.3,
              transition: { duration: 0.3 },
              transitionEnd: { opacity: 1 },
            },
          }}
        />
        <motion.path
          d="M146 139.5L95.5 190.5L44 139.5V112L95.5 160.5L146 112V139.5Z"
          fill="#00FFF4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, delay: 2.3 } },
            hover: {
              opacity: 0.3,
              transition: { duration: 0.3 },
              transitionEnd: { opacity: 1 },
            },
          }}
        />
      </svg>
    </motion.a>
  );
}
