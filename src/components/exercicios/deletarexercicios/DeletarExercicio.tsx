import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Exercicio from "../../models/Exercicio";
import { RotatingLines } from "react-loader-spinner";
import { deletar, listar } from "../../../services/Service";

function DeletarExercicio() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/exercicios/${id}`, setExercicio)
        } catch (error: any) {
            alert('Exercicio não encontrado!')

        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarExercicio() {
        setIsLoading(true)
    
        try {
            await deletar(`/exercicios/${id}`)
            alert('Exercicio apagado!')
            navigate("/exercicios") // Certifique-se de que a navegação está correta
        } catch (error) {
            alert('Erro ao apagar o exercicio')
        }
    
        setIsLoading(false)
    }

    function retornar() {
        navigate("/exercicios")
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='py-4 text-4xl text-center'>Deletar Exercicio</h1>
            <p className='mb-4 font-semibold text-center'>
                Você tem certeza de que deseja apagar o exercicio a seguir?</p>
            <div className='flex flex-col justify-between overflow-hidden border rounded-2xl'>
                <header
                    className='px-6 py-2 text-2xl font-bold text-white bg-slate-600'>
                    Exercicio
                </header>
                <p className='h-full p-8 text-3xl bg-white'>{exercicio.nome}</p>
                <div className="flex">
                    <button
                        className='w-full py-2 bg-red-500 text-slate-100 hover:bg-red-700'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='flex items-center justify-center w-full bg-teal-600 text-slate-100 hover:bg-teal-800'
                        onClick={deletarExercicio}
                    >
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarExercicio


