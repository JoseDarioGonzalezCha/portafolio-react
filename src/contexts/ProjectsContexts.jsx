import { createContext, useState, useEffect, useContext } from "react";
import { getProjects } from "../services/projectsApi";

export const ProjectContext = createContext();

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    try {
      const projectData = await getProjects();
      setProjects(projectData);
    } catch (error) {
      console.log("Error al cargar proyectos", error);
    }
  };
  useEffect(() => {
    loadProjects();
  }, []);
  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};
