
import {DataFetch} from "./DataFetch"
import { RegistrationForm } from "./FormDataFetch"
import { Function_DataFetch } from "./Function_DataFetch"
function App() {
  

  return (
   <div>
    <h1>Data fetching using class componenet</h1>
    <br></br>
    <DataFetch></DataFetch>
    <br></br>
    <br></br>
    <br></br>
    <h1>Data fetching using Function componenet</h1>
    <br></br>
    <Function_DataFetch></Function_DataFetch>
    <br></br>
    <br></br>
    <br></br>
    <h1>User Registration Form</h1>
    <br></br>
    <RegistrationForm></RegistrationForm>
   </div>
  )
}

export default App
