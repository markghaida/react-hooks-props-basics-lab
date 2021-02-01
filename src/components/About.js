import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      { props.bio && props.bio.length > 1 ? <p>{props.bio}</p> :null}
      {/* i dont understand the purpose of :null on ln 7 */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here  */}

      {/* why do you have to again put in the attributes github and linkedin?
      what is the purpose since you already have it in the Links.js */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
