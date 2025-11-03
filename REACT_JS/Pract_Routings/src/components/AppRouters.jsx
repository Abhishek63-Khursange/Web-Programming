import { Home } from "./Home"
import { Contact } from "./Contact"
import { About } from "./About"
import { Routes,Route } from "react-router-dom"

export function AppRouter(){
    return(
        <div>
            <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/about-us" element={<About/>}></Route>
                  <Route path="/contact-us" element={<Contact/>}></Route>
                </Routes>
        </div>
    )
}