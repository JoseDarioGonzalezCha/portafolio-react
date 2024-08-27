import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasePage from "./Pages/BasePage/BasePage";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Feedback from "./Pages/Feedback/Feedback";
import NotFound from "./Pages/NotFound/NotFound";
import Messages from "./Pages/Messages/Messages";

function AppRoutes({ themeToggler }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage themeToggler={themeToggler} />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/message" element={<Messages />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
