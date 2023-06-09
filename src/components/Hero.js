import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-section flex flex-col justify-evenly items-center px-4 gap-10 lg:flex-row"
    >
      <div className="flex flex-col h-full gap-10 justify-end items-center lg:items-start lg:justify-center">
        <h1 className="text-4xl font-bold text-center text-text md:text-5xl lg:text-6xl lg:text-left">
          Bhoomika
          <br />
          The Journey Within
        </h1>
        <h3 className="text-xl text-center text-text lg:text-2xl lg:text-left lg:w-2/3">
          Without even an interval, we are continuously playing one or the other
          character
        </h3>
        <button
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=UCl-l-DXjf0", "_blank")
          }
          className="text-xl text-center text-text bg-primary shadow-md hover:shadow-text w-60 h-16 rounded-lg hover:-translate-y-2 hover:transition-all hover:duration-300 hover:ease-in-out lg:text-3xl lg:w-80"
        >
          Watch Trailer
        </button>
      </div>
      <img
        src={require("../assets/hero.png")}
        alt="hero"
        className="h-5/6 object-cover"
      />
    </div>
  );
};

export default Hero;
