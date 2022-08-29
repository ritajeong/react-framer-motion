import * as React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import "./index.css";

const App = () => {
  const [rotate, setRotate] = React.useState(false);
  const [move, setMove] = React.useState(false);
  return (
    <div className="example-container">
      {/* <motion.div
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => {
          setRotate(!rotate);
        }}
      ></motion.div> */}
      {/* <motion.div
        animate={{ x: move ? 100 : -100 }}
        transition={{ delay: 1 }}
        onClick={() => {
          setMove(!move);
        }}
      ></motion.div> */}
      {/* <motion.div
        animate={{ x: move ? 100 : -100 }}
        transition={{ type: "tween", duration: 5 }}
        onClick={() => {
          setMove(!move);
        }}
      ></motion.div> */}
      {/* <motion.div
        animate={{ x: move ? 100 : -100 }}
        transition={{ type: "spring", bounce: 5 }}
        onClick={() => {
          setMove(!move);
        }}
      ></motion.div> */}
      {/* <motion.div
        animate={{ x: move ? 100 : -100 }}
        transition={{ type: "inertia", velocity: 40 }}
        onClick={() => {
          setMove(!move);
        }}
      ></motion.div> */}
      {/* <motion.div whileHover={{ scale: 2 }}></motion.div> */}
      {/* <motion.div drag whileDrag={{ scale: 2 }}></motion.div> */}
      {/* <motion.div
        drag="x"
        dragConstraints={{ left: 50 }}
        whileDrag={{ scale: 2 }}
      ></motion.div> */}
      {/* <motion.div
        animate={{ rotate: [0, 100, 200, 300, 400, 500, 750, 10000] }}
      ></motion.div> */}
      {/* <motion.div
        animate={{ rotate: [0, 100, -100, 100, -100, 100] }}
        transition={{ duration: 5 }}
      ></motion.div> */}
      {/* <motion.div
        animate={{ rotate: [0, 100, -100] }}
        transition={{ repeat: Infinity, duration: 1 }}
      ></motion.div> */}
      <motion.div
        animate={{
          rotate: [0, 200, 200, 0],
          x: [0, 200, 200, 0],
        }}
        transition={{ repeat: Infinity, duration: 1 }}
      ></motion.div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
