import React from "react"

const Contact = () => {
  return (
    <div
      name="contato"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Contato
          </p>
          <p className="py-6 ">Entre em contato comigo.</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/7ee8d29e-945c-4c67-ba82-527d93816efa"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              className="p-2 bg-transparent border-2 rounded-md 
                          text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Digite seu email"
              className="my-4 p-2 bg-transparent border-2 rounded-md 
                          text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Digite sua mensagem"
              rows="10"
              className="
                p-2 bg-transparent border-2 rounded-md text-white
                focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 
            px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Lets talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
