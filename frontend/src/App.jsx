import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Pages/Sidebar/Sidebar'
import Navbar from './Pages/Navbar/Navbar'
import Footer from './Pages/Footer/Footer'

function App() {

  const [isSidebarClose, setIsSidebarClose] = useState(false);
  return (
    <>
      <div className=''>
        <Navbar  isSidebarClose ={isSidebarClose} setIsSidebarClose={setIsSidebarClose}/>
         <Sidebar isSidebarClose ={isSidebarClose} setIsSidebarClose={setIsSidebarClose} />
        {/* <Footer /> */}
         </div>

    </>
  )
}

export default App
