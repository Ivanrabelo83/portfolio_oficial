// import React from "react"
// import workImg from "../assets/projetos/workImg.jpeg"
// import realEstate from "../assets/projetos/realestate.jpg"
import reactParallax from "../assets/projetos/reactParallax.jpg"
import reactWeather from "../assets/projetos/reactWeather.jpg"
import reactSmooth from "../assets/projetos/reactSmooth.jpg"
import arrayDestruct from "../assets/projetos/arrayDestruct.jpg"
import navbar from "../assets/projetos/navbar.jpg"
import installNode from "../assets/projetos/installNode.jpg"

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen text-gray-300 bg-gradient-to-b from-black
    to-gray-800"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Projetos
          </p>
          <p className="py-2">Confira alguns dos meus trabalhos</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${reactParallax})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Controle Financeiro
                <p className=" text-xs flex text-center">
                  React.js | Styled-Component | Axios
                </p>
              </span>

              {/* LINK DEMONSTRAÇÃO */}
              <div className="pt-8 text-center">
                <a
                  href="https://luxury-kelpie-4adc5b.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                {/* LINK REPOSITORIO */}
                <a
                  href="https://github.com/Ivanrabelo83/Controle_Financeiro-React.js-Styled-Components"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${reactWeather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider  text-center ml-4">
                Site Financeiro
                <p className=" text-xs flex text-center">
                  React.js | Tailwind | React-typed
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://bespoke-treacle-3583cd.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ivanrabelo83/Site_Financeiro_Reactjs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${reactSmooth})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center ml-4">
                Sistema de Chamadas
                <p className=" text-xs flex text-center">
                  React.js | Styled-Component | Axios | Firebase
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://6307770ca087b3006a5d0ede--clinquant-sawine-c61c57.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ivanrabelo83/-Sistema_de_Chamadas-React.js-Firebase-Styled-Components"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${arrayDestruct})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center ml-12">
                Api Marvel
                <p className=" text-xs flex text-center">
                  React.js | Styled-Components | Axios
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://cocky-curran-2c4d2f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/Ivanrabelo83/CONSUMO_API_MARVEL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${navbar})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider  ml-12">
                Filmaria
                <p className=" text-xs flex text-center">
                  React.js | Styled-Components | Axios
                </p>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://gorgeous-faloodeh-a98881.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/Ivanrabelo83/consumo-api-filmes-reactjs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${installNode})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ml-14">
                Portfólio
                <p className=" text-xs flex text-center mr-6">
                  React.js | Tailwind | React-icons
                </p>
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
