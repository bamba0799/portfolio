import { useState } from 'react'

import './App.css'

import Header from './ components/Header/Header'
import SideBar from './ components/SideBar/SideBar'
import Main from './ components/Main/Main'
import Card from './ components/Card/Card'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Project from './Pages/Project'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/projects',
    element: <Project/>
  }
])




function App() {
  const [count, setCount] = useState(0)

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
  return (
  <div className=' flex flex-row justify-center'>
    <div className=' w-full lg:w-[800px]'>
        <Header className='w-full lg:w-[800px]' toggleSideBar={toggleSideBar} />
        <Main>
          <RouterProvider router={router}/>
        </Main>
    </div>
  </div>
  )
}

export default App
