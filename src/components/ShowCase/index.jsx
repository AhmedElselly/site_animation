import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../../styles/ShowCase.module.css";

export default function Showcase() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={sectionRef} className={styles.showcase}>
      {/* Background layer */}
      <motion.div
        className={styles.showcase_background}
        style={{ y: backgroundY }}
      />

      {/* Foreground content */}
      <motion.div
        className={styles.showcase_content}
        style={{ y: foregroundY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className={styles.showcase_eyebrow}>Showcase</span>
        <h2>Parallax Depth & Motion</h2>
        <p>
          This section uses scroll position to drive layered motion. Background
          and foreground elements move at different speeds, creating depth
          without distraction.
        </p>
      </motion.div>
    </section>
  );
}
