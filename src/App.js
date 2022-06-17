import { HashRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Project from './Projects';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className="content container">
        <Routes>
          <Route path='/portfolioversiontwo' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Project />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
