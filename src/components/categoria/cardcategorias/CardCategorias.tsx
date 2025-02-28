import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
    categoria: Categoria
  }

function CardCategorias({categoria}: CardCategoriaProps) {
    return (
        <div className="flex flex-col justify-between overflow-hidden border rounded-2xl my-10">
            <header className="px-6 py-2 text-2xl font-bold text-lime-400 bg-black">Categoria</header>
            <p className="h-full p-8 text-3xl bg-white">{categoria.nome}</p>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className="flex items-center justify-center w-full py-2 bg-black border border-white text-slate-50 hover:bg-gray-600">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className="flex items-center justify-center w-full bg-black border border-white text-slate-50 hover:bg-gray-600">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;