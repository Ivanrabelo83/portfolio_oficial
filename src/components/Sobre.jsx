import React from "react"

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
          <p className="text-xl ">
            Meu nome é Ivan Rabelo Sou de Fortaleza/Ceará e moro no bairro
            Messejana, filho de Alice e Francisco, tenho 4 irmãos: Zé Iran,
            Marineide, Aurineide e Iraneide que faleceu em 2021 em decorrência
            da covid 19.
          </p>
          <p className="text-xl mt-5">
            Sou designer há 10 anos e no último ano iniciei a minha jornada no
            mundo da programação com foco em Front End. Recentemente fiz um
            investimento na compra de livros: Clean Code, Javascript: O guia,
            Aprendendo react na prática. Tenho uma princesa de nome Alicia que
            me faz rir demais e uma esposa maravilhosa que se chama Renata.
          </p>
        </div>

        <br />
      </div>
    </div>
  )
}

export default About
