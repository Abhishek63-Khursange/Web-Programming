
import { AppRouter } from "./components/AppRouters"

import { Navbar } from "./components/Navbar"
import { Route, Routes,BrowserRouter } from "react-router-dom"
function App() {
 

  return (
    <BrowserRouter>
      <div> 
        
       <Navbar></Navbar>
      <AppRouter></AppRouter>
   

      </div></BrowserRouter>
       
    
  )
}

export default App
