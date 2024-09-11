import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { Container } from "./Projects.styles";
import { useProjectContext } from "../../contexts/ProjectsContexts";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Projects = () => {
  const { projects } = useProjectContext();

  return (
    <Container>
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            imageUrl={project.imageUrl}
            description={project.description}
            repoUrl={project.repoUrl}
            deployUrl={project.deployUrl}
          />
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default Projects;

/* 
 {projects.length < 0 ? (
        <p>No hay proyectos para mostrar</p>
      ) : (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            imageUrl={project.imageUrl}
            description={project.description}
            repoUrl={project.repoUrl}
            deployUrl={project.deployUrl}
          />
        ))
      )}
 */
