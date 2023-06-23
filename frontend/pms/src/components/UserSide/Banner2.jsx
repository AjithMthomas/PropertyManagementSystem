import React from 'react'
import Bubble from '../../images/bubble.jpg'
import Room from '../../images/bedroom.jpg'
import Villa from '../../images/outside.jpg'

function Activities() {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={Bubble} alt="" />
      </div>
      <div className="relative p-4">
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Rooms</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={Room} alt="" />
      </div>
      <div className="relative p-4">
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Villas</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={Villa} alt="" />
      </div>
    </div>
  )
}

export default Activities;