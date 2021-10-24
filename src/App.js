import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
