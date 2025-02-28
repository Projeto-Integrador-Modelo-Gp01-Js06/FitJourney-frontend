import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../models/Categoria"
import { RotatingLines } from "react-loader-spinner"
import { atualizar, cadastrar, listar } from "../../../services/Service"
import Exercicio from "../../models/Exercicio"
import Navbar from "../../navbar/Navbar"
import Footer from "../../footer/Footer"

function FormExercicio() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        exercicio: {} as Exercicio,
    })
    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

    const { id } = useParams<{ id: string }>()

    function formatarDataParaInput(dateString: string | number | Date) {

        if (!dateString) return "";
        const date = new Date(dateString);

        if(isNaN(date.getTime())) return "";

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`; // formato compatível com input type="date"
    }



    async function buscarExercicioPorId(id: string) {
        try {
            await listar(`/exercicios/${id}`, setExercicio)
        } catch (error: any) {
            alert('Erro ao Buscar Exercicio')
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Erro ao Buscar Categoria')
        }
    }

    async function buscarCategorias() {
        try {
            await listar(`/categorias`, setCategorias)
        } catch (error: any) {
            alert('Erro ao Buscar Categorias')
        }
    }

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarExercicioPorId(id)
        }
    }, [id])

    useEffect(() => {
        setExercicio({
            ...exercicio,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

        const { type, value, name } = e.target

        let valor: string | number = value

        if (['number', 'range'].includes(type) || (!isNaN(Number(value)) && value !== '')) {
            valor = parseFloat(Number(value).toFixed(2))
        }

        setExercicio({
            ...exercicio,
            [name]: valor,
            categoria: categoria,
        })
    }

    function retornar() {
        navigate('/exercicios')
    }

    async function gerarNovoExercicio(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/exercicios`, exercicio, setExercicio)

                alert('Exercicio atualizado com sucesso')
            } catch (error: any) {
                alert('Erro ao atualizar o Exercicio!')
            }
        } else {
            try {
                await cadastrar(`/exercicios`, exercicio, setExercicio)

                alert('Exercicio cadastrado com sucesso')
            } catch (error: any) {
                alert('Erro ao cadastrar o Exercicio!')
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.nome === ''

    return (
        <>
        <div className="container flex flex-col items-center mx-auto bg-gray-950" >
            <Navbar />
            <h1 className="my-8 text-4xl font-bold text-center text-lime-400 ">
                {id !== undefined
                    ? 'EDITAR EXERCICIO'
                    : 'CADASTRAR EXERCICIO'}
            </h1>

            <form
                className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovoExercicio}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className='text-white'>
                        Nome do Exercicio
                    </label>
                    <input
                        value={exercicio.nome}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o nome do Exercicio"
                        name="nome"
                        required
                        className="p-2 bg-white border-1 rounded border-slate-700"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className='text-white'>
                        Descrição
                    </label>
                    <input
                        value={exercicio.descricao}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui a descrição do Exercicio"
                        name="descricao"
                        required
                        className="p-2 bg-white border-1 rounded border-slate-700"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="tempo" className='text-white'>
                        Tempo de Execução
                    </label>
                    <input
                        value={exercicio.tempo}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o tempo de duração do Exercicio"
                        name="tempo"
                        required
                        className="p-2 bg-white border-1 rounded border-slate-700"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="serie" className='text-white'>
                        Séries
                    </label>
                    <input
                        value={exercicio.serie}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui a série de Exercicios"
                        name="serie"
                        required
                        className="p-2 bg-white border-1 rounded border-slate-700"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="repeticoes" className='text-white'>
                        Repetições
                    </label>
                    <input
                        value={exercicio.repeticoes}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui as repetições do Exercicio"
                        name="repeticoes"
                        required
                        className="p-2 bg-white border-1 rounded border-slate-700"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="peso" className='text-white'>
                        Peso
                    </label>
                    <input
                        value={exercicio.peso}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o peso médio para carga"
                        name="peso"
                        required
                        className="p-2 bg-white border-1 rounded border-slate-700"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descanso" className='text-white'>
                        Tempo de Descanso entre Séries
                    </label>
                    <input
                        value={exercicio.descanso}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o tempo de descanso"
                        name="descanso"
                        required
                        className="p-2 bg-white border-1 rounded border-slate-700"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="midia" className='text-white'>
                        Foto ou vídeo de Referência
                    </label>
                    <input
                        value={exercicio.midia}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui uma foto ou video de referência"
                        name="midia"
                        required
                        className="p-2 bg-white border-1 rounded border-slate-700"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="data" className='text-white'>
                        Data
                    </label>
                    <input
                        value={formatarDataParaInput(exercicio.data)}
                        onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui a data"
                        name="data"
                        required
                        className="p-2 bg-white border-1 rounded border-slate-700"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p className='text-white'>Categoria do Exercicio</p>
                    <select
                        name="categoria"
                        id="categoria"
                        className="p-2 bg-white border-1 rounded border-slate-700"
                        onChange={(e) =>
                            buscarCategoriaPorId(
                                e.currentTarget.value
                            )
                        }
                    >
                        <option value="" selected disabled >
                            Selecione uma Categoria
                        </option>
                        {categorias.map((categoria) => (
                            <>
                                <option
                                    value={
                                        categoria.id
                                    }
                                >
                                    {categoria.nome}
                                </option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    disabled={carregandoCategoria}
                    className="flex justify-center w-1/2 py-2 my-4 mx-auto font-bold text-white rounded bg-gray-500 hover:bg-lime-400 hover:text-gray-950 "
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>
                            {id !== undefined
                                ? 'ATUALIZAR'
                                : 'CADASTRAR'}
                        </span>
                    )}
                </button>
            </form>
            
        </div>
        <Footer/>
        </>
    )
}

export default FormExercicio