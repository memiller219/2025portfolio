import React from 'react'
import { useScroll, useTransform, motion } from "framer-motion";

export function Parallax({ children, offset = 50, speed = 0.5 }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, offset], [0, -offset * speed]);
  return <motion.div style={{ y }}>{children}</motion.div>;
}
