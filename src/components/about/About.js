import React from 'react';
import { Link } from 'react-router-dom';

import "./About.css";

const About = () => {
  const youtubeCloneTeam = {
    jacquelinePasaoa: {
      name: "Jacqueline Pasaoa",
      bio: "Full-Stack Software Developer that loves to travel and code when she can. She loves to spend her off time watching movies and thinking what code to develop for future projects.",
      github: "https://github.com/jkpasaoa",
      image: "https://avatars.githubusercontent.com/u/115671619?v=4"
    },
    evanVelush: {
      name: "Evan Velush",
      bio: "Full-Stack Software Developer and Pursuit Fellow who loves for nature and psychology, and possesses a drive to make our future more equitable and accessible for all.",
      github: "https://github.com/SuperNinjaEv",
      image: "https://avatars.githubusercontent.com/u/115671509?v=4"
    }
  };

  return (
    <div className="about">

      <p style={{ fontSize: 20 }}><em><strong>Welcome!</strong></em> This is our first group React-based website. It is a replica of the website Youtube that users can use to browse Youtube videos. By working together, we utilized our individual strengths to create a functional and visually appealing user interface. Through this project, we gained practical experience in React and other front-end technologies, and developed a deeper understanding of web development practices.</p>
      <br />
      <h1>Meet the Team</h1>
      <hr />
      <div className="developers">

        <div className="developer">
            <img src={youtubeCloneTeam.jacquelinePasaoa.image} alt="Jacqueline Pasaoa" style={{ width: "100px" }} />
            <h3>{youtubeCloneTeam.jacquelinePasaoa.name}</h3>
            <p>{youtubeCloneTeam.jacquelinePasaoa.bio}</p>
            <Link to={youtubeCloneTeam.jacquelinePasaoa.github}>Jacqueline's Github</Link>
        </div>

        <div className="developer">
          <img src={youtubeCloneTeam.evanVelush.image} alt="Evan Velush" style={{ width: "100px" }} />
          <h3>{youtubeCloneTeam.evanVelush.name}</h3>
          <p>{youtubeCloneTeam.evanVelush.bio}</p>
          <Link to={youtubeCloneTeam.evanVelush.github}>Evan's GitHub</Link>
        </div>
      </div>

    </div>
  );
};

export default About;

