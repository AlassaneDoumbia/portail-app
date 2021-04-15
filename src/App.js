// import logo from './logo.svg';
import './App.css';
 import NavbarPage from "./Components/Header/NavBar";
 import { BrowserRouter as Router } from 'react-router-dom';
import Body from './Components/Body';
import FooterPage from "./Components/Footer/Footer";

function App() {

 
  return (
    <Router>
      <NavbarPage></NavbarPage>
      <Body></Body>
      <FooterPage></FooterPage>
    </Router>
  );
}

export default App;
