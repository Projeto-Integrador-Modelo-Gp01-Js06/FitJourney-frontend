import {
    ArrowCircleRight,
    Envelope,
    GithubLogo,
    InstagramLogo,
  } from "@phosphor-icons/react";
  import { motion } from "framer-motion";
import { Link } from "react-router-dom";

  
  function Home() {
    const textVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
  
    return (
      <div className="relative h-screen w-full overflow-hidden">
        {/* GIF de fundo */}
        <img
          src="/images/FitJourney.gif"
          alt="GIF de fundo"
          className="absolute inset-0 object-cover z-[-1] h-full w-full"
        />
  
        {/* Conteúdo da Home */}
        <div className="items-start flex pt-20">
          <div className="flex justify-center items-start w-full h-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-40 h-5 bg-lime-400 skew-x-24 m-5 transform translate-x-10"></div>
            </motion.div>
            <div className="flex flex-col items-center mx-4">
              <motion.div
                className="text-lime-400 text-6xl font-black italic mb-2 font-spartan"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                FIT
              </motion.div>
              <motion.div
                className="text-lime-400 text-6xl font-black italic font-spartan"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                JOURNEY
              </motion.div>
              <div className="items-center flex flex-col">
                <motion.div
                  className="text-lime-400 text-1xl font-semibold italic font-sans"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  PERSONAL TRAINER
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-40 h-5 bg-lime-400 skew-x-23 m-5 transform -translate-x-10"></div>
            </motion.div>
          </div>
        </div>
  
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-end justify-center my-4 h-50 mr-8" // Ajuste a margem direita
        >
          {/* Botão com ícone do Instagram */}
          <motion.div
            whileHover={{ scale: 1.2 }} // Aumenta o tamanho em 20% ao passar o mouse
            transition={{ type: "spring", stiffness: 300 }} // Transição suave
            className="mb-4 p-2 bg-lime-400 rounded-full" // Fundo verde e borda arredondada
          >
            <Link to="src\components\pages\Home.tsx" className="text-black">
              <button
                className="flex items-center justify-center p-0 bg-lime-400 rounded-full hover:bg-lime-500 cursor-pointer" // Cursor de mão
              >
                <InstagramLogo size={24} />
              </button>
            </Link>
          </motion.div>
  
          {/* Botão com ícone do Github */}
          <motion.div
            whileHover={{ scale: 1.2 }} // Aumenta o tamanho em 20% ao passar o mouse
            transition={{ type: "spring", stiffness: 300 }} // Transição suave
            className="mb-4 p-2 bg-lime-400 rounded-full" // Fundo verde e borda arredondada
          >
            <Link to="src\components\pages\Home.tsx" className="text-black">
              <button
                className="flex items-center justify-center p-0 bg-lime-400 rounded-full hover:bg-lime-500 cursor-pointer" // Cursor de mão
              >
                <GithubLogo size={24} />
              </button>
            </Link>
          </motion.div>
  
          {/* Botão com ícone do Envelope */}
          <motion.div
            whileHover={{ scale: 1.2 }} // Aumenta o tamanho em 20% ao passar o mouse
            transition={{ type: "spring", stiffness: 300 }} // Transição suave
            className="p-2 bg-lime-400 rounded-full" // Fundo verde e borda arredondada
          >
            <Link to="src\components\pages\Home.tsx" className="text-black">
              <button
                className="flex items-center justify-center p-0 bg-lime-400 rounded-full hover:bg-lime-500 cursor-pointer" // Cursor de mão
              >
                <Envelope size={24} />
              </button>
            </Link>
          </motion.div>
        </motion.div>
  
        {/* Botão "INICIAR JORNADA" */}
        <div className="absolute mx-15 -my-20">
          <motion.p
            className="text-lime-400 text-5xl font-semibold italic font-sans"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            SUA JORNADA FITNESS
          </motion.p>
          <motion.p
            className="mx-50 text-lime-400 text-5xl font-semibold italic font-sans"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            COMEÇA AQUI
          </motion.p>
          <motion.div
            className="w-50 h-9 bg-lime-400 skew-x-24 mx-70 mt-5 rounded-2xl hover:scale-110"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            <Link
              to="/landing"
              className="w-full h-full flex items-center justify-center text-black hover:text-white font-sans gap-2 font-bold"
            >
              INICIAR JORNADA
              <ArrowCircleRight size={25} />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }
  
  export default Home;
  