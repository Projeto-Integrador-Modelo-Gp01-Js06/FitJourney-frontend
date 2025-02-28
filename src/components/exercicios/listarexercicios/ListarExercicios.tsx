import { useEffect, useState } from "react"
import Exercicio from "../../models/Exercicio"
import CardExercicios from "../cardprodutos/CardExercicios"
import { listar } from "../../../services/Service"
import { Oval } from "react-loader-spinner"
import ModalExercicio from "../modalexercicios/ModalExercicio"

function ListarExercicios() {
    const [exercicios, setExercicios] = useState<Exercicio[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarExercicios() {
        setIsLoading(true)

        try {
            await listar('/exercicios', setExercicios)
        } catch (error: any) {
            console.log('Erro ao listar todos os Exercicios!')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        buscarExercicios()
    }, [exercicios.length])

    return (
        <>
            <div className="bg-black pt-8 ">
                {isLoading && (
                    <div className="flex justify-center pt-8">
                        <Oval
                            color="#0D9488"
                            height="80"
                            width="80"
                            visible={true}
                            aria-label="oval-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
                )}

                <div className="flex justify-center w-0.8 m-8">
                    <div className="container flex flex-col mx-4">
                        {!isLoading && exercicios.length === 0 && (
                            <span className="py-8 text-3xl text-center">
                                Nenhum exercicio foi encontrado
                            </span>
                        )}

                        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-4/5 gap-8 ">
                            {exercicios.map((exercicio) => (
                                <CardExercicios
                                    key={exercicio.id}
                                    exercicio={exercicio}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-around max-h-screen p-4">
                    <ModalExercicio />
                </div>
            </div>
        </>
    )
}

export default ListarExercicios