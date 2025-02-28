function Contato() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
        <h1 className="text-3xl font-bold text-lime-400 mb-4">Entre em Contato</h1>

        <div className="bg-black p-6 rounded-lg shadow-md w-full max-w-lg border border-lime-400">
          <p className="text-lime-400 text-center mb-4">
            📍 Endereço: Rua das Academias, 123 - Centro, FitCity - FC 00000-000
          </p>
          <p className="text-lime-400 text-center mb-6">
            📞 Telefone: (11) 98765-4321 | ✉️ Email: contato@fitjourney.com
          </p>

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
      </div>
    </>
  );
}

export default Contato;