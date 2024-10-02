import { useState } from 'react'

import './App.css'

import Header from './ components/Header/Header'
import SideBar from './ components/SideBar/SideBar'
import Main from './ components/Main/Main'
import Card from './ components/Card/Card'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/wait-list',
    element: <div className='mt-72'>wait list</div>
  }
])




function App() {
  const [count, setCount] = useState(0)

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  return (
  <div>
   {isSidebarOpen?
    <button onClick={()=>toggleSideBar()} className='absolute bg-slate-950/[0.2] w-full h-full'>
    
    </button>
    :null
    }
    <Header toggleSideBar={toggleSideBar}/>
    <SideBar isSidebarOpen={isSidebarOpen}/>
    <Main className=''>
      <RouterProvider router={router}/>
    </Main>
  </div>
  )
}

export default App
