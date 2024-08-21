import { motion } from "framer-motion";
import { perspective } from "./anim";
import { links } from "./data";
import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:rounded-full after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                <a href={href}>{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
