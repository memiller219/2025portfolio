import React, { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const icons = [
  { component: <FaReact color="#61DBFB" size="40px" />, label: "React" },
  {
    component: <FaJsSquare color="#F0DB4F" size="40px" />,
    label: "JavaScript",
  },
  { component: <FaHtml5 color="#E34C26" size="40px" />, label: "HTML" },
  { component: <FaCss3Alt color="#264de4" size="40px" />, label: "CSS" },
  { component: <FaNodeJs color="#68A063" size="40px" />, label: "Node.js" },
];

export const TechStackCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [angle, setAngle] = useState(0);
  const requestRef = useRef();
  const radius = 60;

  const animate = () => {
    setAngle((prev) => prev + 0.02); // Speed of rotation
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isHovered) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [isHovered]);

  const getIconPosition = (index, total) => {
    const angleOffset = (2 * Math.PI * index) / total + angle;
    const x = radius * Math.cos(angleOffset);
    const y = radius * Math.sin(angleOffset);
    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <div
      className="relative sm:min-h-18 h-full flex items-center justify-center text-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-center">
        <span className="text-xl font-bold"></span>

        {icons.map((icon, i) => (
          <div
            key={icon.label}
            className="absolute transition-transform duration-100"
            style={getIconPosition(i, icons.length)}
          >
            <div className="text-2xl">{icon.component}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
