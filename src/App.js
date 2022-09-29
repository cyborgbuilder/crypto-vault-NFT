import './App.css';
import Accordion from './components/Accordion';
import Countdown from './components/Countdown';
import Home from './components/Home';
import HowToBuy from './components/HowToBuy';
import ProjectPage from './components/ProjectPage';
import Roadmap from './components/Roadmap'
import Team from './components/Team';

function App() {
  return (
    <div className="App">
     <Home />
     <Countdown />
     <Roadmap />
     <Accordion />
     <ProjectPage />
     <HowToBuy />
     <Team />
    </div>
  );
}

export default App;
