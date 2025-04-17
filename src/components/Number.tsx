import React from "react";
import "./Number.css";

import zero from "../assets/0.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";

export default function Number() {
  const numberImages = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  ];
  return (
    <>
      {numberImages.reverse().map((numberImage, idx) => {
        return (
          <img
            key={idx}
            src={numberImage}
            alt={`Number ${9 - idx}`}
            className="number-image"
          />
        );
      })}
    </>
  );
}
