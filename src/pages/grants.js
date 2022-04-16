import React from 'react'
import Header from "../components/global/header";
import BackgroundImage from "../../src/assets/images/backgrounds/hero-background.png"
import HeroImage from "../../src/assets/images/hero/hero-image.png"



export default function Grants() {
  return (
    <div
      id="#"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${BackgroundImage})`,
      }}
      className="w-screen h-max bg-cover flex flex-col"
    >
      <Header />
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full lg:max-w-5xl flex flex-col xl:flex-row-reverse items-center justify-center mb-10">
        
          <div className="block xl:hidden w-full h-full flex flex-col xl:flex-row items-center justify-end md:justify-center text-center text-white px-5 mt-5 ">
              <div className="md:max-w-xl">
                <div className="modius-bold text-4xl sm:text-6xl md:text-5xl">
               
                  Want to go full-DAO?             </div>
                <div className="modius text-2xl sm:text-3xl px-5 sm:px-10 pt-5">
                  We want to help
                </div>
                <div className='flex flex-col gap-2 bg-white text-black p-5 rounded-xl'> 
              <div className='text-sm block xl:hidden open-sans-light mt-4'>This grant program is built and governed by the DAOpunk community. It is intended to provide individuals with the initial resources that are needed to take the leap and go full-time DAO. We want to flip corpRATS into DAOpunks and benefit the entire DAOsphere with rich new talent and vision. Our grants program is meant to encourage the growth of the DAO ecosystem by enabling everyone the opportunity to contribute.
              

</div>
<div>
  Grants will be awarded based on the DAOpunk mission and philosophy as defined by the community. DAOpunk NFT holders will vote to select 3 grantees to each receive up to 1 ETH. If you are someone who is ready to go full-time DAO, has a clear plan for how to get there, and knows what you are getting into, but are in need of some funding to bridge the gap, you might just be the right fit for this grant!
</div>
<div className='flex flex-col gap-1 mt-5'>
            <div>Application submissions are OPEN, starting 4.20.22</div>
            <div>Submissions close on 5.4.22</div>
            <div>Cohort_0 members will be announced on 5.11.22</div>

            </div>
</div>
              </div>
            </div>
          <div className="hidden xl:flex w-full h-full flex-col justify-center items-center text-center text-white px-5">
            <div className="md:max-w-xl">
              <div className="modius-bold text-5xl">
             Want to go full-DAO?
              </div>
              <div
                className="modius text-2xl py-2"
              >
                We want to help
              </div>
              <div className='text-black bg-white p-8 rounded-xl open-sans-light'><div className='flex flex-col gap-5'>
              <div className='text-md hidden xl:block open-sans-light'>This grant program is built and governed by the DAOpunk community. It is intended to provide individuals with the initial resources that are needed to take the leap and go full-time DAO. We want to flip corpRATS into DAOpunks and benefit the entire DAOsphere with rich new talent and vision. Our grants program is meant to encourage the growth of the DAO ecosystem by enabling everyone the opportunity to contribute.</div>

<div>Grants will be awarded based on the DAOpunk mission and philosophy as defined by the community. DAOpunk NFT holders will vote to select 3 grantees to each receive up to 1 ETH. If you are someone who is ready to go full-time DAO, has a clear plan for how to get there, and knows what you are getting into, but are in need of some funding to bridge the gap, you might just be the right fit for this grant!</div> 
            </div>
            <div className='flex flex-col gap-2 mt-5'>
            <div>Application submissions are OPEN, starting 4.20.22</div>
            <div>Submissions close on 5.4.22</div>
            <div>Cohort_0 members will be announced on 5.11.22</div>

            </div>
            </div>

            </div>
            <a
              href="/grants/apply"
              className="hidden md:block w-max px-16 mt-5 py-5 rounded red text-white modius-bold text-xl leading-snug text-black outline-none cursor-pointer"
            >
              APPLY
            </a>
          </div>
          <button
            onClick={() => {
              window.location.href = "/grants/apply";
            }}
            className="xl:hidden w-2/3 sm:w-max px-3 sm:px-10 mx-5 py-5 mt-5 rounded bg-white modius-bold text-md sm:text-xl leading-snug text-black outline-none"
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  )
}
