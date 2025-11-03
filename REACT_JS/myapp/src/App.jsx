
import { ClassDynamic } from "./ClassDyanamic"
import { Demo_class } from "./Demo_class"
import { Demo_function } from "./Demo_function"
import { DynamicData } from "./DynamicData"
function App() {
  

  return (
    <div>
      <h1>Hello React</h1>
      <Demo_class></Demo_class>
      <Demo_function />
      <br></br><br></br>
       <h1>below output show the dynmic data using component</h1>
       <br></br><br></br>
      
      <DynamicData
         mainHeading="This is the Section that we implemented Dynamic data showing through the function"
         Intro="we use dynamic data for passing in components"
         ButtonText="Know more"
         age={17}
      />
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
        
       <h1>Second section</h1>
       <DynamicData
         mainHeading="This is the Section that we implemented Dynamic data showing through the function"
         Intro="we use dynamic data for passing in components"
         ButtonText="Know more"
         
         linkText="Visit Google"
         link="www.google.com"
         age={23}
      />
      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <h1>Third section</h1>
        <h1> -------------------------------------------------</h1>
        <h1>this is the class level components for dynamic data</h1>

        <ClassDynamic 
           MainHeading="Dynamic Class Component"
           Intro="This is the Dynamic data using Class Component"
           ButtonText="Click more"
           link="www.bcci.com"
           linkText="Know more"
           age={23}
        />

    </div>
  )
}

export default App
