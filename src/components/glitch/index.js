import React from "react";
import "./styles.scss";

const Glitch = ({ text }) => {
  return (
    <div className="glitch" data-text={text}>
      {text}
    </div>
  );
};
export default Glitch;
