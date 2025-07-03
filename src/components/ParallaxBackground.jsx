import { motion, useScroll, useTransform } from "framer-motion";

const shapes = [
  { size: 200, x: 20, y: 100, speed: 0.4, rotate: true },
  { size: 150, x: 70, y: 300, speed: 0.2 },
  { size: 220, x: 50, y: 600, speed: 0.3, rotate: true },
];

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((s, i) => {
        const y = useTransform(scrollY, [0, 1000], [s.y, s.y - s.speed * 1000]);
        const rotate = useTransform(scrollY, [0, 1000], [0, s.rotate ? 360 : 0]);

        return (
          <motion.div
            key={i}
            style={{ y, rotate, left: `${s.x}%`, top: `${s.y}px` }}
            className="absolute rounded-full border border-[#00FFF4] opacity-50"
          >
            <div
              style={{
                width: s.size,
                height: s.size,
                borderRadius: '9999px',
              }}
              className="border-2 border-[#00FFF4] opacity-40"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
