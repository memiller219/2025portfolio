import { Parallax } from "react-parallax";
import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BottomGradient from "./BottomGradient";
import NET from "vanta/dist/vanta.net.min";

const ParallaxHero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 300.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffe3,
          backgroundColor: 0x172a,
        })
      );
    }
  }, [vantaEffect]);

  return (
    <>
      <div className="relative" id="home">
        <Parallax
          strength={400}
          bgImageStyle={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            ref={vantaRef}
            className="min-h-screen sm:min-h-screen p-10 flex items-center"
          >
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="grid grid-cols-1 md:grid-cols-3 text-center "
            >
              <h1 className="text-4xl sm:text-5xl text-center md:text-left font-bold drop-shadow-lg md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-5xl font-bold max-w-3xl md:ml-10"
                >
                  <span className="invisible block h-0 overflow-hidden">
                    just one more console.log away from greatness.
                  </span>

                  <span className="text-4xl relative group font-light">
                    Hi, I’m Michael{" "}
                    <span className="font-light text-[#00fff4]"> - </span>{" "}
                    <span className="absolute opacity-0 group-hover:opacity-100 transition text-sm text-[#00FFF4] block -mt-24">
                      (Currently fighting with CSS Grid)
                    </span>
                  </span>

                  <div className="min-h-[2.5rem] md:min-h-[3.5rem]">
                    <span className="text-[#00FFF4] inline-block">
                      <Typewriter
                        words={[
                          "writing code that works... eventually.",
                          "on a first-name basis with Stack Overflow.",
                          "turning coffee into components.",
                          "fixing bugs I created yesterday.",
                          "still convincing CSS to behave.",
                          "deploying vibes and pixels.",
                          "just one more console.log away from greatness.",
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={2500}
                      />
                    </span>
                  </div>
                </motion.div>
              </h1>
              <p className="opacity-0 animate-fade-in-delay-3 mt-3 max-2-2xl text-center md:col-start-1 md:col-span-2 md:text-left md:ml-10 ">
                <span className="opacity-0 animate-fade-in-delay-3 font-thin">
                  Mid-level developer, full-time bug whisperer, part-time stack
                  overflow archaeologist.
                </span>
              </p>
            </div>
          </div>

          <button className="absolute mt-80 bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-5 pt-10">
            <span className="text-small text-muted-foreground mb-2">
              Scroll
            </span>
            <ArrowDown className="h-5 w-5 text-white animate-bounce" />
          </button>
        </Parallax>
      </div>
      <BottomGradient />
    </>
  );
};

export default ParallaxHero;
