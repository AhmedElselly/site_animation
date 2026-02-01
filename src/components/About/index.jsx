import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";

export default function About() {
  // const container = {
  //   hidden: {},
  //   show: {
  //     transition: {
  //       // staggerChildren: 0.2,
  //     },
  //   },
  // };

  const textItem = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.8, ease: "easeOut" },
    },
  };

  const imageItem = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.about_inner}
        // variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Text */}
        <motion.div className={styles.about_text} variants={textItem}>
          <span className={styles.eyebrow}>About</span>
          <h2>Observing the City at Night</h2>
          <p>
            I focus on urban environments after dark, capturing quiet moments,
            artificial light, and the subtle tension of nighttime streets.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div className={styles.about_image} variants={imageItem} />
      </motion.div>
    </section>
  );
}
