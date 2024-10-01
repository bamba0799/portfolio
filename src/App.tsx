import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
  <div className=''>
    <Header toggleSideBar={toggleSideBar}/>
    <SideBar isSidebarOpen={isSidebarOpen}/>
    <Main>
      <RouterProvider router={router}/>
    </Main>
  </div>
  )
}

export default App
