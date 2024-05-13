import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroForm from "./Login/CadastroForm";
import Navbar from "./Components/Navbar";
import Contato from "./Contato"
import { Forum } from "@mui/icons-material";
import Coleta from "./PColeta";
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<CadastroForm />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/Forum' element={<Forum />} />
        <Route path='/Coleta' element={<Coleta />} />
      </Routes>
      </BrowserRouter>    
      <Footer />
    </div>
  );
}

export default App;