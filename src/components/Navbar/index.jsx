import { motion } from "framer-motion";
import styles from "../../styles/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      <div className={styles.logo} onClick={() => scrollToSection("hero")}>
        Motion Lab
      </div>

      <div className={`${styles.links} ${isOpen ? styles.open : ""}`}>
        <button onClick={() => scrollTo("showcase")}>Home</button>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("features")}>Features</button>
        <button onClick={() => scrollTo("scroll-motion")}>Work</button>
        {/* <button onClick={() => scrollTo("showcase")}>Showcase</button> */}
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </div>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
    </motion.nav>
  );
}
