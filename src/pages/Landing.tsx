import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Landing = () => {
  return (
    <div className="bg-black text-lime-400 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Conteúdo Principal */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold">FIT JOURNEY</h1>
        <p className="text-lg">PERSONAL TRAINER</p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 p-10">
        <Link to="/cardio" className="text-center w-full sm:w-1/3">
          <h2 className="text-2xl font-bold">CARDIO</h2>
          <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdpcGprb3Y0YmZnYjE4d3pkYWh0eWNvMDhhcGZ1NXJlZ3NhamMwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/e9Rst0YMFxGQZQWDx1/giphy.gif"
          alt="Cardio GIF"
            className="rounded-lg w-full h-60 object-cover"
          />
        </Link>

        <Link to="/musculacao" className="text-center w-full sm:w-1/3">
          <h2 className="text-2xl font-bold">MUSCULAÇÃO</h2>
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnZ4emtwM3RycHBoNDM4YW1hN2x1MXo4NW85dXZibzEweXRnaGd5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/L6nqJALCMhglna5hwd/giphy.gif"
            alt="Musculação GIF"
            className="rounded-lg w-full h-60 object-cover"
          />
        </Link>

        <Link to="/coletivas" className="text-center w-full sm:w-1/3">
          <h2 className="text-2xl font-bold">COLETIVAS</h2>
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGlmNmJuOWV6dHJqODF3YzA2ZW9nZHk0YXlzNmhhemd5cDdlbjFwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/85BF8qzl3hNN8e2ksR/giphy.gif"
            alt="Coletivas GIF"
            className="rounded-lg w-full h-60 object-cover"
          />
        </Link>
      </div>

      {/* Espaços para links */}
      <div className="flex justify-center gap-4 p-6">
        {/* Espaço do Aluno */}
        <Link
          to="/exercicios"
          className="bg-lime-300 text-black p-2 rounded-lg font-bold w-1/4 text-center"
        >
          EXERCICIOS →
        </Link>

        {/* Cadastrar Exercício */}
        <Link
          to="/cadastrarexercicio"
          className="bg-lime-300 text-black p-2 rounded-lg font-bold w-1/4 text-center"
        >
          CADASTRAR EXERCÍCIO →
        </Link>

        {/* Cadastrar Categoria */}
        <Link
          to="/cadastrarcategoria"
          className="bg-lime-300 text-black p-2 rounded-lg font-bold w-1/4 text-center"
        >
          CADASTRAR CATEGORIA →
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;