function Contato() {
  return (
    <>
      <div className="bg-black min-h-screen p-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-lime-400 mb-2">CONTATO</h1>
        <p className="text-lime-400 text-center mb-6">
          Tem dúvidas, sugestões ou quer colaborar com o FitJourney? Entre em contato conosco!
        </p>

        <div className="flex flex-row items-center justify-center w-full max-w-4xl">
          <div className="bg-black p-6 rounded-lg shadow-md w-1/2 border border-lime-400">
            <h2 className="text-lime-400 text-xl font-bold mb-4 text-center">Envie uma mensagem</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="p-2 border border-lime-400 rounded text-lime-400 bg-black"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-lime-400 rounded text-lime-400 bg-black"
                required
              />
              <textarea
                placeholder="Sua mensagem"
                className="p-2 border border-lime-400 rounded h-32 text-lime-400 bg-black focus:outline-none focus:ring-2 focus:ring-lime-400"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-lime-400 text-black font-bold py-2 px-4 rounded hover:bg-white border border-black transition"
              >
                Enviar
              </button>
            </form>
          </div>

          <img
            src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1200&h=900&crop=1"
            alt="Mapa localização"
            className="w-1/2 border border-lime-400 rounded-lg ml-6"
          />
        </div>

        <p className="text-lime-400 text-center mt-6 text-sm">
          📍 Endereço: Rua Vida Saudável, 123 – Bairro Bem-Estar, São Paulo, SP – 00000-000
        </p>

        <p className="text-lime-400 text-center mt-6">
          Estamos sempre abertos a novas ideias e parcerias. Vamos juntos nessa jornada rumo a uma vida mais saudável! 💙
        </p>
      </div>
    </>
  );
}

export default Contato;