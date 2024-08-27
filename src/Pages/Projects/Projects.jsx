import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { Container } from "./Projects.styles";
import { useProjectContext } from "../../contexts/ProjectsContexts";

const Projects = () => {
  const { projects } = useProjectContext();

  return (
    <Container>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          subtitle={project.subtitle}
          imageUrl={project.imageUrl}
          description={project.description}
          repoUrl={project.repoUrl}
          deployUrl={project.deployUrl}
        />
      ))}
    </Container>
  );
};

export default Projects;
