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
    path: '/profile',
    element: <div className='mt-72'>wait list</div>
  },
  {
    path: '/projects',
    element: <div className='mt-72'>project</div>
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

    <Header toggleSideBar={toggleSideBar}/>
    <Main className=''>
      <RouterProvider router={router}/>
    </Main>
  </div>
  )
}

export default App
