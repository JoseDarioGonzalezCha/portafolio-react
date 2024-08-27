import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import { lightTheme, darkTheme } from "./Styles/theme";
import AppRoutes from "./routes";
import { ProjectProvider } from "./contexts/ProjectsContexts";
import { MessagesProvider } from "./contexts/MessagesContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ProjectProvider>
        <MessagesProvider>
          <LanguageProvider>
            <AppRoutes themeToggler={themeToggler} />
          </LanguageProvider>
        </MessagesProvider>
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App;
