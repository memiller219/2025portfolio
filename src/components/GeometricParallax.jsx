import { useEffect, useState } from "react";
import NetworkShape from "./NetworkShape"; // this will be the per-shape component

function generateNetwork({ pointCount, size }) {
  return Array.from({ length: pointCount }).map(() => ({
    x: Math.random() * size,
    y: Math.random() * size,
  }));
}

export default function GeometricParallax() {
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 2 : 5;

    const newNetworks = Array.from({ length: count }).map(() => {
      const size = 150 + Math.random() * 150;
      const speed = 0.2 + Math.random() * 0.4;
      const fade = Math.random() > 0.5;
      const rotate = Math.random() > 0.5;
      const pointCount = 3 + Math.floor(Math.random() * 4);

      return {
        id: crypto.randomUUID(),
        points: generateNetwork({ pointCount, size }),
        size,
        speed,
        x: Math.random() * 80,
        y: Math.random() * 600,
        rotate,
        fade,
      };
    });

    setNetworks(newNetworks);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {networks.map((net) => (
        <NetworkShape key={net.id} {...net} />
      ))}
    </div>
  );
}
