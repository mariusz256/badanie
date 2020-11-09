import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

import { motion } from "framer-motion";

const container = {
  tap: {
    scale: 1,
    boxShadow: "0px 0px 5rem #fff",
    transition: { duration: 0.1, ease: "easeIn" },
  },

  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 2rem #fff",
    transition: { duration: 0.3, ease: "easeIn" },
  },

  initial: { scale: 1 },
  animate: {
    scale: [1.1, 1],

    transition: {
      delay: 2,
      duration: 0.7,
      type: "spring",
    },
  },
};

const MotionLink = motion.custom(Link);

function Button(props) {
  return (
    <MotionLink
      variants={container}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      to={props.to}
      className="button"
    >
      {props.title}
    </MotionLink>
  );
}

export default Button;
