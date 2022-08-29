import * as React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import "./index.css";

const App = () => {
  return (
    <div className="example-container">
      <motion.div animate={{ y: 100 }}></motion.div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
