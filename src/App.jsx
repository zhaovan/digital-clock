import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const IMAGE_HEIGHT = 640;

import "./App.css";
import Number from "./components/Number";

function App() {
  const [timer, setTimer] = useState(99);

  const numbersRef = useRef(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (timer <= 0) {
        setTimer(99);
        return;
      }
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  const tens = Math.floor(timer / 10);
  const ones = timer % 10;

  return (
    <div className="container">
      <div className="number-container">
        <motion.div
          className="number"
          ref={numbersRef}
          animate={{ top: (9 - tens) * -1 * IMAGE_HEIGHT }}
        >
          <Number />
        </motion.div>
      </div>
      <div className="number-container">
        <motion.div
          className="number"
          animate={{ top: (9 - ones) * -1 * IMAGE_HEIGHT }}
        >
          <Number />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
