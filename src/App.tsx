import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Cardio from "./pages/Cardio";
import Musculacao from "./pages/Musculacao";
import Coletivas from "./pages/Coletivas";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato"; // Importação da nova página Contato

import ListarExercicios from "./components/exercicios/listarexercicios/ListarExercicios";
import FormExercicio from "./components/exercicios/formexercicio/FormExercicio";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListarCategorias from "./components/categoria/listarcategorias/ListarCategorias";
import DeletarCategoria from "./components/categoria/deletarcategorias/DeletarCategoria";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* Página Inicial */}
          <Route path="/" element={<Home />} />
          
          {/* Página Landing */}
          <Route path="/landing" element={<Landing />} />

          {/* Páginas com Navbar e Footer */}
          {[
            { path: "/cardio", element: <Cardio /> },
            { path: "/musculacao", element: <Musculacao /> },
            { path: "/coletivas", element: <Coletivas /> },
            { path: "/sobre", element: <Sobre /> },
            { path: "/contato", element: <Contato /> }, // Adicionando Contato
            { path: "/cadastrarcategoria", element: <FormCategoria /> }
          ].map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Navbar />
                  {element}
                  <Footer />
                </>
              }
            />
          ))}

          {/* Outras rotas */}
          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/cadastrarexercicio" element={<FormExercicio />} />
          <Route path="/editarexercicio/:id" element={<FormExercicio />} />
          <Route path="/exercicios" element={<ListarExercicios />} />
          
          {/* Rota curinga para redirecionamento */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
