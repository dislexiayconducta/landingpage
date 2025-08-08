"use client";
import React from "react";
import { Element } from "react-scroll";

function AboutUs() {
  return (
    <div className="bg-background-secondary-foreground flex justify-center">
      <Element name="nosotros" className="max-w-7xl py-20">
        <h1 className="mt-8 text-background-secondary text-2xl">Nosotros</h1>
        <span className="text-5xl text-background-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          repellat provident quam? Enim natus consequuntur perspiciatis
          consectetur magni in necessitatibus dolor vel, consequatur eveniet
          itaque molestiae vero nemo architecto reprehenderit!
        </span>
      </Element>
    </div>
  );
}

export default AboutUs;
