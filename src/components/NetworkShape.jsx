import { motion, useScroll, useTransform } from "framer-motion";

export default function NetworkShape({
  points,
  size,
  speed,
  x,
  y,
  rotate: shouldRotate,
  fade,
}) {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 1500], [0, -speed * 1000]);
  const rotate = useTransform(scrollY, [0, 1500], [0, shouldRotate ? 360 : 0]);
  const opacity = fade ? useTransform(scrollY, [0, 800], [0.8, 0.1]) : 0.6;

  return (
    <motion.svg
      style={{
        y: translateY,
        rotate,
        left: `${x}%`,
        top: `${y}px`,
        opacity,
      }}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="absolute stroke-[#00FFF4] stroke-opacity-70"
    >
      {points.map((p, i) => (
        <circle
          key={`c-${i}`}
          cx={p.x}
          cy={p.y}
          r="2.5"
          fill="#00FFF4"
          filter="url(#glow)"
        />
      ))}
      {points.map((p, i) =>
        points
          .slice(i + 1)
          .map((q, j) => (
            <line
              key={`l-${i}-${j}`}
              x1={p.x}
              y1={p.y}
              x2={q.x}
              y2={q.y}
              strokeWidth="1"
              stroke="#00FFF4"
              filter="url(#glow)"
            />
          ))
      )}

      {/* Glow filter */}
      <defs>
        <filter id="glow">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00FFF4" />
        </filter>
      </defs>

      {/* 
      // FUTURE:
      // Add mouse interactivity or hover effects here
      */}
    </motion.svg>
  );
}
