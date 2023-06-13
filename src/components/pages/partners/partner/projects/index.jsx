import React from 'react';
import ProjectsListItem from './ProjectsListItem';

const ProjectsList = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects.map(({ id, date, short_description, full_description, photo_url, name }) => (
        <ProjectsListItem
          key={id}
          date={date}
          photo={photo_url}
          name={name}
          shortDescription={short_description}
          fullDescription={full_description}
        />
      ))}
    </div>
  );
};

export default ProjectsList;