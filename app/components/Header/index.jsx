"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import Nav from "./Nav";
import styles from "./style.module.scss";

const menu = {
  open: {
    width: "480px",
    height: "auto",
    top: "-10px",
    right: "-15px",
    borderRadius: "25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "60px",
    height: "60px",
    top: "10px",
    right: "10px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="bg-white">
      <div className="container flex justify-between">
        <div className="flex gap-2 items-center ">
          {/* <Image src="/images/icon.png" alt='le mec rasoir' width={32} height={32} /> */}
          <a
            href="/"
            className="text-2xl font-roundo font-medium md:pr-8 py-10"
          >
            Le mec rasoir
          </a>
        </div>
      </div>
      <div className={styles.header}>
        <motion.div
          className={styles.menu}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
        <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
    </section>
  );
}
