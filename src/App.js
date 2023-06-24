
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import  Navbar from './components/Navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  return (
  <BrowserRouter>
<Navbar/>
<Footer/>
<Routes>
{/* {/* <Route path='About' element={<About/>}/> */}
{/* <Route path='/contact' element={<Contact/>} /> */}


</Routes>


  </BrowserRouter>


  );
}

export default App;
