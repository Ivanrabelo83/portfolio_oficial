import React from "react";

const About = () => {
  return (
    <div
      name="sobre"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col 
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 mt-10">
            Sobre mim
          </p>
        </div>
        <div className="mt-10">
          <p className="text-xl">
            Meu nome é Ivan Rabelo Sou de Fortaleza/Ceará. Sou designer há 10
            anos e professor voluntário de informática básica e designer gráfico
            para crianças da comunidade de 12 à 17 anos de idade, no último ano
            iniciei a minha jornada no mundo da programação com foco em Front
            End. Deste então venho me aperfeiçoando cada vez mais nas princípais
            tecnologias do mercado como html, css, javascript, react.js,
            tailwind, typescript e next.js. Para me sentir mais vontade no dia a
            dia como programador front end venho lendo o livro clean code e
            metodologias ageis e consumindo muito conteúdo pelo youtube. Pra
            descontrair eu gosto de música, séries, marvel, video game e
            musculação.
          </p>
        </div>

        <br />
      </div>
    </div>
  );
};

export default About;
