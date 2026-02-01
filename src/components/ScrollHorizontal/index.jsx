import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import "./index.css";

const items = [
  {
    id: 1,
    color: "#ff0088",
    label: "Night One",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    color: "#dd00ee",
    label: "Night Two",
    image:
      "https://images.unsplash.com/photo-1456930266018-fda42f7404a7?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    color: "#9911ff",
    label: "Night Three",
    image:
      "https://images.unsplash.com/photo-1616243720769-cc4c969abd64?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    color: "#0d63f8",
    label: "Night Four",
    image:
      "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    color: "#0cdcf7",
    label: "Night Five",
    image:
      "https://images.unsplash.com/photo-1446133132410-19df4d6610a1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const isMobile = window.innerWidth < 768;

const ITEM_WIDTH = isMobile ? 280 : 400;
const GAP = isMobile ? 15 : 30;

export default function ScrollHorizontal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  console.log({ scrollYProgress });

  // Move from first item centered to last item centered
  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);

  const textX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -totalDistance * 0.4], // slower than images
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.8, 1],
    [0.1, 0.1, 0.1, 0.2],
  );

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, -totalDistance * 0.6] : [0, -totalDistance],
  );

  console.log({ x });

  return (
    <div id="scroll-motion">
      <section className="intro-section">
        <h1 className="impact">Cairo Nights</h1>
      </section>

      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          {/* text movement in the background */}
          <motion.div
            className="scroll-text"
            style={isMobile ? undefined : { x: textX, opacity: textOpacity }}
          >
            <span>Tokyo</span>
            <span>Nights</span>
            <span>Urban</span>
            <span>Light</span>
          </motion.div>

          <motion.div className="gallery" style={isMobile ? undefined : { x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                style={{
                  "--item-color": item.color,
                  "--item-image": `url(${item.image})`,
                }}
              >
                <div className="item-content">
                  <span className="item-number">0{item.id}</span>
                  <h2>{item.label}</h2>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="scroll-text-bottom"
            style={isMobile ? undefined : { x: textX, opacity: textOpacity }}
          >
            <span>Cairo</span>
            <span>Life</span>
            <span>City</span>
            <span>Nights</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
