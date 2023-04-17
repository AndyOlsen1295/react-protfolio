
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Flick Picker',
    description: 'Pick a movie with ease!',
    image: require('../assets/images/Flick-Picker.png').default,
    link: 'https://loquacious-florentine-c87ce2.netlify.app/'
  },
];

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        {projects.map(project => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <a href={project.link}>View project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
