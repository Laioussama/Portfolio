import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Digital Project Manager",
          "Change Management Specialist",
          "Digital Transformation Trainer",
          "IT / ERP Deployment Lead",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
