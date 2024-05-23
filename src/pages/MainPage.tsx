import React from 'react'

// import Header from '../components/header/header'
import Sidebar from './Sidebar'
import { NavPages } from './NavPages'

const MainPage: React.FC = () => {
  return (
   <>
  <h1> header </h1>
    <section>
        <div className='grid grid-cols-12 gap-5 p-5'>

        <div className='col-span-2 pl-4 h-screen'> 
            <Sidebar/>
        </div>

        <div className='col-span-10 border-solid border-2 border-rgba(0, 0, 0, 0.13) rounded-lg p-16 w-full'>
            <NavPages />
        </div>
        

        </div>
    </section>
    </>
  )
}

export default MainPage  