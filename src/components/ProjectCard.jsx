import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
        Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;
