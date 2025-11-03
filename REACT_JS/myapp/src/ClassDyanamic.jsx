import { Component } from "react";

export class ClassDynamic extends Component{
    render(){
        return(
            <div>
               <h1>{this.props.MainHeading}</h1>
               <h2>{this.props.Intro}</h2>
               <button>{this.props.ButtonText}</button>
 <br></br>
               {
                this.props.link ? <a href={this.props.link}>{this.props.linkText}</a>:null
               }
               {
                  this.props.age>=18 ? <h1>You are mature man lets think again</h1>:<h1>Dont worry child</h1>
               }


            </div>
        )
    }
}