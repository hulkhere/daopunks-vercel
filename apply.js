import React from 'react'
import Header from "../components/global/header";
import BackgroundImage from "../../src/assets/images/backgrounds/hero-background.png"
import HeroImage from "../../src/assets/images/hero/hero-image.png"



export default function Apply() {
  return (
    <div
      id="#"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${BackgroundImage})`,
      }}
      className="w-screen h-screen bg-cover flex flex-col"
    >
      <Header />
      <div  style={{
      }} className="w-full h-full flex items-center justify-center md:px-24 lg:px-40 xl:px-80 pb-14">
    <iframe className='bg-white rounded-lg mx-6 lg:mx-0 mt-16 px-3' src="https://tally.so/r/nrQbMw?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="corpRat to DAOpunk"></iframe> 

      </div>

    </div>
  )
}

