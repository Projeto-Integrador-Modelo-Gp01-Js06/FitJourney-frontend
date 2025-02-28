import Popup from "reactjs-popup";
import FormExercicio from "../formexercicio/FormExercicio";
import 'reactjs-popup/dist/index.css';
import './ModalExercicio.css'

function ModalExercicio() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='flex justify-center w-1/6 border-gray-950 border-1 py-2 my-12 font-bold text-white rounded bg-gray-500 hover:bg-lime-300 hover:text-gray-950'>
                        Cadastrar Novo Exercício
                    </button>
                }
                modal
                nested
            >
                <div >
                    {/* Adiciona o Formulário de exercício dentro do modal */}
                    <FormExercicio />
                </div>
            </Popup>
        </>
    );
}

export default ModalExercicio;
