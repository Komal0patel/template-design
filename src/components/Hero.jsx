import React from "react";
import CardSlider from "./CardSlider"; 

const Hero = () => {
  const cardData = [
    {
      title: "Save the Planet",
      description: "Join us in our mission to protect the environment.",
      image:'img1.jpg'
    },
    {
      title: "Donate for Change",
      description: "Your small contribution makes a big difference.",
      image:'img3.png'
    },
    {
      title: "Volunteer With Us",
      description: "Be part of the movement and spread awareness.",
      image:'img2.jpg'
    }
  ];

  return (
    <div
      id="home"
      className="h-screen bg-heroBG text-white flex flex-col items-center justify-center pt-28"
    >

      {/* Card Slider */}
      <CardSlider data={cardData} interval={4000} />
    </div>
  );
};

export default Hero;
