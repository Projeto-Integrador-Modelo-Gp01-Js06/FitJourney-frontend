import { useState } from "react";

const CadastrarCategoria = () => {
  // Estado para armazenar o nome da categoria
  const [categoriaNome, setCategoriaNome] = useState("");

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você faria a lógica de envio da categoria (ex: para a API)
    console.log("Categoria cadastrada:", categoriaNome);
  };

  return (
    <div className="bg-black text-lime-400 min-h-screen flex flex-col justify-between">
      <div className="flex-1">
        {/* Conteúdo do Formulário */}
        <div className="text-center p-10">
          <h1 className="text-4xl font-bold">FIT JOURNEY</h1>
          <p className="text-lg">CADASTRAR NOVA CATEGORIA</p>
        </div>

        {/* Formulário de Cadastro de Categoria */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-black p-8 rounded-lg w-1/3"
          >
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2" htmlFor="categoriaNome">
                Nome da Categoria
              </label>
              <input
                type="text"
                id="categoriaNome"
                value={categoriaNome}
                onChange={(e) => setCategoriaNome(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Digite o nome da categoria"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-lime-300 text-black py-2 px-4 rounded-lg w-full font-bold"
            >
              CADASTRAR CATEGORIA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastrarCategoria;
