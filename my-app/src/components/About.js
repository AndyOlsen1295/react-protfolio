import React from 'react';
import myPhoto from '../assets/images/portfolio_picture.jpg'; // import photo here.

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="content">
        <div className="left">
          <img src={myPhoto} alt="My Photo" />
        </div>
        <div className="right">
          <p>Hello, my name is Andrew Olsen. I am a currently a Quality Control Lab Supervisor for Staker Parson in the Aggregate Department. I have 3 years of supervisor experience, with a total of 6 years of Quality Control experience. I began my coding journey in the Fall of 2022 and have my eyes set on entering into the Tech Industry in 2023. My hobbies include: Skiing, Mountain Biking, Golfing, Ceramics, and cheering for the Buffalo Bills!</p>
        </div>
      </div>
    </section>
  );
}

export default About;
