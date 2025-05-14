
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Components/Login/Login';
function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dasboard />}> */}
            <Route index element={<Login />} />
            {/* <Route path="batchreport" element={<BatchReports />} /> */}
          
        </Routes>
      </BrowserRouter>






    </>
  )
}

export default App
