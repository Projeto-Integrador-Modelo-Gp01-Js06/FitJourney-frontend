import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Carrossel from "../components/carrossel/Carrossel";

function Sobre() {
  const membros = [
    { nome: "Adrielly Ramos", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.37.32.jpeg?updatedAt=1740681564018", github: "https://github.com/AdriellyN", linkedin: "https://www.linkedin.com/in/adrielly-do-nascimento-ramos/" },
    { nome: "Ana Paula", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.15.jpeg?updatedAt=1740681564193", github: "https://github.com/anapaula-sds", linkedin: "https://www.linkedin.com/in/anapaula-sds/" },
    { nome: "Carlos Henrique", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/perfil.JPG?updatedAt=1740681753965", github: "https://github.com/CrMessiProgrammer", linkedin: "https://www.linkedin.com/in/carlos-h-dev/" },
    { nome: "Eduarda Galeno", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.15%20(1).jpeg?updatedAt=1740681564323", github: "https://github.com/eduarda-galeno", linkedin: "https://www.linkedin.com/in/eduardagaleno/" },
    { nome: "Gabriel Domiciano", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.14.jpeg?updatedAt=1740681564038", github: "https://github.com/GabrielSDomiciano", linkedin: "https://www.linkedin.com/in/gabriel-domiciano96/" },
    { nome: "Gustavo Teles", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.14%20(1).jpeg?updatedAt=1740681564227", github: "https://github.com/ustavoteles", linkedin: "https://www.linkedin.com/in/ustavoteles/" },
    { nome: "Jeisa Boaventura", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.16.jpeg?updatedAt=1740681564502", github: "https://github.com/Caaarolb", linkedin: "https://www.linkedin.com/in/-caroline-boaventura/" },
    { nome: "Simone Gonzaga", foto: "https://ik.imagekit.io/m1iwfxqae/Fotos%20-%20Integrantes%20(PI)/WhatsApp%20Image%202025-02-27%20at%2015.30.15%20(2).jpeg?updatedAt=1740681564292", github: "https://github.com/si-gonz", linkedin: "https://www.linkedin.com/in/simonegonzagag/" },
  ];

  return (
	<>
		{/* SOBRE DO FITJOURNEY */}
		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center py-16 px-6">
			{/* Título */}
			<h1 className="text-lime-300 text-4xl lg:text-5xl font-extrabold mb-10 text-center">
				SOBRE O FITJOURNEY
			</h1>

			{/* Container principal */}
			<div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-8">
				{/* Texto */}
				<div className="w-full md:w-1/2 text-center md:text-left">
					<p className="text-lime-300 text-lg lg:text-xl mb-6 font-normal leading-relaxed">
						O FitJourney nasceu da nossa paixão por um estilo de vida saudável e do desejo de inspirar mais pessoas a cuidarem do corpo e da mente.
					</p>

					<p className="text-lime-300 text-lg lg:text-xl mb-6 font-normal leading-relaxed">
						Criamos este projeto para incentivar hábitos mais saudáveis por meio da informação, motivação e comunidade. Nosso objetivo é fornecer conteúdos, dicas e suporte para ajudar você na sua jornada rumo ao bem-estar.
					</p>

					<p className="text-lime-300 text-lg lg:text-xl font-normal leading-relaxed">
						Junte-se a nós e descubra que viver de forma saudável pode ser leve, prazeroso e possível para todos.
					</p>
				</div>

				{/* Imagem ao lado */}
				<div className="w-full md:w-1/2 flex justify-center">
					<div className="rounded-xl shadow-xl overflow-hidden max-w-md transform transition duration-500 hover:scale-105">
						<Carrossel />
					</div>
				</div>
			</div>
		</div>
	

				


		{/* SOBRE A NOSSA EQUIPE */}
		<div className="min-h-screen bg-lime-300 flex flex-col items-center py-10">
			<h1 className="text-black text-4xl lg:text-5xl font-extrabold mb-10">
				CONHEÇA A NOSSA EQUIPE!</h1>
			<p className="text-black text-xl mb-10 text-center max-w-2xl font-normal">
				Somos desenvolvedores apaixonados por tecnologia, inovação e qualidade. Juntos, transformamos desafios em soluções eficientes.
			</p>
			
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				{membros.map((membro, index) => (
				<div key={index} className="bg-black shadow-lg rounded-lg p-4 flex flex-col items-center hover:scale-110 transition-transform duration-300 transform group">
					<img src={membro.foto} alt={membro.nome} className="w-32 h-32 rounded-full mb-4 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
					<h2 className="text-lg font-bold text-white">{membro.nome}</h2>
					<h2 className="text-lg font-semibold text-white">Dev</h2>
					<div className="flex space-x-4 mt-2">
						<a
							href={membro.github}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-yellow-400 p-2 rounded-full hover:scale-110 hover:bg-yellow-300 transition-all duration-200">
								<GithubLogo size={26} weight="bold" className="text-black" />
						</a>
						<a
							href={membro.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-yellow-400 p-2 rounded-full hover:scale-110 hover:bg-yellow-300 transition-all duration-200">
								<LinkedinLogo size={26} weight="bold" className="text-black" />
						</a>
					</div>
				</div>
				))}
			</div>
		</div>
	</>
  );
}

export default Sobre;