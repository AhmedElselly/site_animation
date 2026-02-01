import { motion } from "framer-motion";
import styles from "../../styles/Hero.module.css";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 1.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.hero}>
      {/* Background image layer */}
      <motion.div
        className={styles.hero_background}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* Content */}
      <motion.div
        className={styles.hero_content}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item}>Ahmed Elselly</motion.h1>

        <motion.p variants={item}>Urban & Night Photography</motion.p>

        <motion.div variants={item} className={styles.hero_line} />
      </motion.div>
    </section>
  );
}
