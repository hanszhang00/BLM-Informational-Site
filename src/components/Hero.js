import React from "react";
import Typical from "react-typical";

const Hero = () => {
  return (
    <header className='hero'>
      <div className='hero-center'>
        <h1>Black Lives Matter</h1>
        <Typical
          steps={[
            "become more educated about the history of BLM",
            2000,
            "take action to support the movement TODAY",
            1500,
            "help us contribute if you can!",
            5000,
            "",
            5000,
          ]}
          loop={Infinity}
          wrapper='h4'
        />
      </div>
    </header>
  );
};

export default Hero;
