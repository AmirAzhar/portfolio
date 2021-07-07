import "./home.css";

import { useSpring, animated } from "react-spring";
import { useState } from "react";

const Home = () => {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });
  return <animated.div style={styles}>I will fade in and out</animated.div>;
};

export default Home;
