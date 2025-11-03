export function DynamicData(prop){
    return(
        <div>
       <h1>{prop.mainHeading}</h1>
       <h2>{prop.Intro}</h2>
       <button>{prop.ButtonText}</button>
       <br></br>
       {
        prop.link ? <a href={prop.link}>{prop.linkText}</a>:null
       }
       {
        prop.age>=18 ? <h1>You are eligible for vote</h1>:<h1>You are not eligible for vote</h1>
       }
</div>

    )
}