import { Navbar } from "./components/Navbar"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import { AppRouter } from "./components/AppRouter"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      
    <AppRouter></AppRouter>
    </div></BrowserRouter>
  )
}

export default App
