import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Built from './Pages/Built'

import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <>
      <NavBar/>
      <LinkContainer exact to="/"><Home /></LinkContainer>
      <LinkContainer to="projects"><Built /></LinkContainer>
    </>
  );
}

export default App;
