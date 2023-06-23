import React from 'react'
import OutsideView from '../../images/Swimming.jpg'
import SeaView from '../../images/Topview.jpg'
import DroneView from '../../images/wideview.jpg'
import FrontView from '../../images/Seaview.jpg'
import InsideView from '../../images/Lounge.jpg'

function Gallery() {

    return (
        <div id='gallery' className="max-w-[1140px] m-auto w-full px-4">
            <h2 className='text-center text-gray-700 p-4 font-serif'>Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img className='w-full h-full object-cover' src={OutsideView} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={SeaView} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={DroneView} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={FrontView} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={InsideView} alt="" />
                </div>
            </div>
          
        </div>
    )
}

export default Gallery;