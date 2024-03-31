import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home_Page'
import { DndContext } from '@dnd-kit/core'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DndContext>
      <Home />
    </DndContext>
    </>
  )
}

export default App
