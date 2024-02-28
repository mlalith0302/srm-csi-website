import React from 'react'
import {Tilt} from 'react-tilt'
const MainCard = ({heading, image, content, mode}) => {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:        "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
  return (
        <Tilt options={defaultOptions}> 
            <div className={`relative w-64 h-80 bg-opacity-20 backdrop-filter backdrop-blur-xl border-2  shadow-md rounded-xl overflow-hidden ${mode ? 'bg-gray-300 text-black border-black' : 'text-white bg-black border-white'}`}>
                <img src={image} alt="Nothing" className='w-full h-48 object-cover' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                    <h2 className='text-3xl from-black mb-2'>{heading}</h2>
                    <p className=''>{content}</p>
                </div>
            </div>  
        </Tilt>
  )
}

export default MainCard