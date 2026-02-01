import { motion } from "framer-motion";
import styles from "../../styles/CTA.module.css";

export default function CTA() {
  return (
    <section id="contact" className={styles.cta}>
      <motion.div
        className={styles.cta_inner}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Let’s Build With Motion</h2>
        <p>
          Scroll-driven animation and parallax can elevate storytelling when
          used with intention and restraint.
        </p>

        <button className={styles.cta_button}>Get in Touch</button>
      </motion.div>
    </section>
  );
}
