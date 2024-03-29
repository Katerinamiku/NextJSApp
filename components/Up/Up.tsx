import s from "./Up.module.css";
import { useScrollY } from "./../../HOCs/useScrollY";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
  const y = useScrollY();
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      className={s.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon appearance={"primary"} icon={"up"} onClick={scrollToTop} />
    </motion.div>
  );
};
