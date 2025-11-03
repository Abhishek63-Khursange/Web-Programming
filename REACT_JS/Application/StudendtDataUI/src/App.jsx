
import {Route,Routes,BrowserRouter} from "react-router-dom"
import { Navigationbar } from "./components/NavigationBar"
import { Dashboard } from "./components/Dashboard"
import { RegisterStudent } from "./components/RegisterStudent"
import { StudentList } from "./components/StudentList"

function App() {
  return (
 <BrowserRouter>
  <Navigationbar/>

<Routes>
  <Route path="/" element={<Dashboard/>}></Route>
  <Route path="/register-student" element={<RegisterStudent/>}></Route>
  <Route path="/student-list" element={<StudentList></StudentList>}></Route>
</Routes>
  
</BrowserRouter>
  )
}

export default App
