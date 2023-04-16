import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tincidunt ex.',
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tincidunt ex.',
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tincidunt ex.',
    image: 'https://via.placeholder.com/150',
    link: 'https://example.com'
  }
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
