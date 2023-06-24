import React from "react";
import "./Tech.css";
import data from '../../data.json'
const TechStacks = () => {
  return (
    <div class="container-section">
   <h1>Tech</h1> 
    <div className="skill-list">
   {data.map((skill, index) => (
        <figure class="snip1527" key={index}>
          <div class="image">
            <img src={skill.image} alt="pr-sample23" />
          </div>
          <figcaption>
            <p>{skill.title}</p>
          </figcaption>
        </figure>
      ))}
     </div>


      
    </div>
  );
};

export default TechStacks;
