import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark p-3">
        <div className="container">
          <div className="d-flex gap-3">
            <Link className="btn btn-light" to="/">
              Home
            </Link>

            <Link className="btn btn-light" to="/cadastro">
              Cadastro
            </Link>

            <Link className="btn btn-light" to="/sobre">
              Sobre
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;