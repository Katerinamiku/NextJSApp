import { ButtonProps } from "./Button.props";
import s from "./Button.module.css";
import cn from "classnames";

import ArrowIconComponent from "./ArrowIconComponent";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...rest
}: ButtonProps): JSX.Element => {
  const scale = useMotionValue(1);
  useEffect(() => {
    scale.onChange((s) => console.log(s));
  }, []);
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(s.button, className, {
        [s.primary]: appearance === "primary",
        [s.ghost]: appearance === "ghost",
      })}
      style={{ scale }}
      {...rest}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(s.arrow, {
            [s.down]: arrow === "down",
            [s.right]: arrow === "right",
          })}
        >
          <ArrowIconComponent />
          {/* <ArrowIcon /> */}
        </span>
      )}
    </motion.button>
  );
};
