import { useScroll, useTransform, motion } from "framer-motion";

export function Parallax({ children, offset = 60, speed = 0.2 }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, offset], [0, -offset * speed]);
  return <motion.div style={{ y }}>{children}</motion.div>;
}
