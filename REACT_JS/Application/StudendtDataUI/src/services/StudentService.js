

export async function getallStudent()
{
   try {
    const response=await fetch("http://localhost:7800/student")
    const data=await response.json();
    return data;
   } catch (error) {
    console.log(error)
   }
}   


export async function registerStudent(formData){
      try {
        const response=await fetch("http://localhost:7800/student",{method:"POST",
            headers:{
                'Accept':'application/json',
                'content-type':'application/json'
            },body: JSON.stringify(formData)
        })
        return response;
      } catch (error) {
        console.log(error)
      }
}
