import { Pencil, Trash } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import Exercicio from "../../models/Exercicio"

interface CardExercicioProps {
    exercicio: Exercicio
}

function CardExercicios({ exercicio }: CardExercicioProps) {
    return (
        <div className="flex flex-col rounded-2xl justify-between bg-white border-1 text-black">
            <div className="px-4 ">
                <img
                    src={exercicio.midia}
                    className="mx-auto mt-1 w-full h-1/2 "
                    alt={exercicio.nome}
                />
                <div className="flex flex-col">
                    <p className="text-xl text-center uppercase py-2 font-bold">
                        {exercicio.nome}
                    </p>
                    <p className="text-sm text-left ">
                        Descrição: {exercicio.descricao}
                    </p>
                    <p className="text-sm text-left ">
                        Tempo de Exercício: {exercicio.tempo}
                    </p>
                    <p className="text-sm text-left ">
                        Série: {exercicio.serie}
                    </p>
                    <p className="text-sm text-left ">
                        Repetições do Exercício: {exercicio.repeticoes}
                    </p>
                    <p className="text-sm text-left">
                        Peso: {exercicio.peso}
                    </p>
                    <p className="text-sm text-left ">
                        Tempo de descanso: {exercicio.descanso}
                    </p>
                    <p className="text-sm text-left ">
                        Data: {new Date(exercicio.data).toLocaleDateString()}
                    </p>
                    <p className="text-s text-center  font-bold">
                        Categoria: {exercicio.categoria?.nome}
                    </p>
                </div>
            </div>

            <div className="flex items-end justify-around py-2 px-2 w-full rounded-b-2xl text-gray-950 bg-lime-400">
                <Link to={`/editarexercicio/${exercicio.id}`}>
                    <Pencil
                        size={24}
                        className="mr-1 hover:fill-teal-800"
                    />
                </Link>

                <Link to={`/deletarexercicio/${exercicio.id}`}>
                    <Trash
                        size={24}
                        className="mr-1 hover:fill-red-700"
                    />
                </Link>
            </div>

        </div>
    )
}

export default CardExercicios