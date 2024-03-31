import React from 'react'
import Block from './Block'

function SibeNav() {
    const blocks=['Label','Input','Button'];
  return (
    <div className="bg-gray-900 w-64 flex-shrink-0 h-full">
        <h1 className='ml-5 mt-5 text-white font-medium'>
            Blocks
        </h1>
            {blocks.map((block)=><Block key={block} name={block}/>)}
        <div>
        </div>
    </div>
  )
}

export default SibeNav