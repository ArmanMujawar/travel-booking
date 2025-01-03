import React from 'react'
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
import keywest from '../assets/keywest.jpg'
import maldives from '../assets/maldives.jpg'
import maldives3 from '../assets/maldives3.jpg'



const Gallery = () => {
  return (
    <>
    <div className='text-center  px-4 mx-w-[1240px] mx-auto'>
      <h1 className='text-3xl md:text-4xl font-bold text-cyan-600 '>Destinations</h1>
      <p>Best places you can go now</p>
    </div>

    <div className='mx-w-[1240px] mx-auto grid grid-cols-3 px-4 py-16 gap-4 '>
          
        <div className='relative '>
            <img src={borabora} alt="" />
                <div className='absolute top-0 left-0'>
                    <p className='text-xl px-4 pt-4 italic text-white '>Maldives</p>
                </div>
        </div>

        <div className='relative'>
            <img className=" " src={keywest} alt="" />
                <div className='absolute top-0 left-0'>
                    <p className='text-xl px-4 pt-4 italic  text-white '>goa</p>
                </div>
        </div>
      
        <div className='relative'>
            <img className=" " src={maldives} alt="" />
                <div className='absolute top-0 left-0'>
                    <p className='text-xl px-4 italic  text-white '>keywist</p>
                </div>
        </div>
      

        <div className='relative'>
            <img className=" " src={maldives3} alt="" />
                <div className='absolute top-0 left-0'>
                    <p className='text-xl px-4 pt-4 italic  text-white '>Maldives2</p>
                </div>
        </div>
      
        <div className='relative'>
            <img className=" " src={borabora} alt="" />
                <div className='absolute top-0 left-0'>
                    <p className='text-xl px-4 pt-4 italic text-white '>lakshdweep</p>
                </div>
        </div>
        <div className='relative'>
            <img className=" " src={borabora2} alt="" />
                <div className='absolute top-0 left-0'>
                    <p className='text-xl px-4 pt-4 italic text-white '>Maldives2</p>
                </div>
        </div>
      
      
    </div>
</>
  )
}

export default Gallery
