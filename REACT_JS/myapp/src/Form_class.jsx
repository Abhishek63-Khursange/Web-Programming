import { Component } from "react";

export class Form_class extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Name"></input>
                <br></br>
                <input type="text" placeholder="Phone number"></input>
                <br></br>
                <input type="button" value={"login"}></input>
            </form>
        )
    }
}