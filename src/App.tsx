import React from 'react'
import { ColorPicker } from './components/ColorPicker' 

const App: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-900'>
      <ColorPicker />
    </div>
  )
}

export	default App;