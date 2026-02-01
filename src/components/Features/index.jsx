import { motion } from "framer-motion";
import styles from "../../styles/Features.module.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <motion.div
        className={styles.features_inner}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Features</h2>

        <div className={styles.features_grid}>
          <motion.div variants={itemVariants} className={styles.feature_card}>
            <h3>Scroll Animations</h3>
            <p>
              Elements animate as they enter the viewport, creating a smooth and
              natural reading flow.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.feature_card}>
            <h3>Parallax Effects</h3>
            <p>
              Background and foreground elements move at different speeds to
              create depth.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.feature_card}>
            <h3>Motion Restraint</h3>
            <p>
              Animations are subtle, intentional, and do not replay
              unnecessarily.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.feature_card}>
            <h3>Responsive Layout</h3>
            <p>The layout adapts smoothly to desktop and mobile devices.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
