import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen'>
      <img className='w-full h-screen top-0 left-0 object-cover' src="https://images.pexels.com/photos/14701641/pexels-photo-14701641.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="hero-image" />
      {/* Overlay*/}
      <div className='bg-black/25 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1200px] m-auto absolute p-4'>
            <p>All Inclusive</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-xl'>Private Beaches & Getways</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa distinctio nam, quibusdam inventore nostrum assumenda optio consequatur! Quia, voluptas neque?
            </p>
            <button className='bg-white text-black'>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
