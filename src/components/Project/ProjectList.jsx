import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((proj) => (
        <ProjectCard key={proj.name} name={proj.name} desc={proj.desc} />
      ))}
    </div>
  );
};

export default ProjectList;
