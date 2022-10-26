import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Componentes/About";
import Habilidades from "./Componentes/Habilidades";
import Home from "./Componentes/Home";
import NavBar from "./Componentes/NavBar/NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Home />
            <Habilidades />
            <About />
        </BrowserRouter>
    );
}

export default App;
