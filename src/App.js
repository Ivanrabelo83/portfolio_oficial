import Sobre from './components/Sobre';
import Experiencia from './components/Experiencia';
import Contato from './components/Contato';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from './components/Portfolio';
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Sobre />
      <Portfolio />
      <Experiencia />
      <Contato />
      <SocialLinks />

    </div>
  );
}

export default App;
