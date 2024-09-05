// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Certificates from './component/Certificates';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar'
import Skills from './component/Skills';

function App() {
  return (
   <div>
   <Navbar/>
   <About/>
   <Certificates/>
   <Skills/>
   <Contact/>
   <Footer/>
   
   </div>
  );
}

export default App;
