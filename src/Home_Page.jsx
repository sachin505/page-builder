import React from 'react'
import CanvasGround from './components/CanvasGround'
import SibeNav from './components/SibeNav'

function Home() {
  return (
    <div className='h-screen flex justify-between'>
      <CanvasGround />
      <SibeNav />
    </div>
  )
}

export default Home