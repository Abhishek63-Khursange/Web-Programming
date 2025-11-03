import { Component } from "react";

export class ComoponentDidMount extends Component{
    constructor(){
        super()
        this.state={
            users:[]
        }

    }
    async componentDidMount(){
        try {
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            const data=await response.json();
            this.setState({users:data});
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return(
            <div>
           {
            this.state.users.length===0 ? <h1>no user found</h1>:<h1>user found</h1>
           }
            </div>
        )
    }
}