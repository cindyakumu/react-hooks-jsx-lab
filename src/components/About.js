import React from "react";
import { image } from "../data/data"; // Ensure the image is correctly imported

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am passionate about web development and love creating new projects.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
