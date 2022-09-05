import React from "react"

import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black
       to-gray-800 text-white"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Front End Developer Jr.
          </h2>
          <p className="text-white py-4 max-w-md">
            Sou designer há 10 anos e a programação sempre foi algo que sonhei
            em trabalhar, desde então venho me aperfeiçoando nas principais
            tecnologias que o mercado exige a um fron-end developer jr como
            html,css,javascript,react.js, next.js, typescript e estou disponível
            em aprender novas tecnlogias que a empresa que me contratar venha a
            precisar.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  "
            >
              Portfolio
              <span className="groud-hover: rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto wd:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
