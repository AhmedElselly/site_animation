import { motion } from "framer-motion";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.navbar_logo}>MotionLab</div>

      <ul className={styles.navbar_links}>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </motion.nav>
  );
}
