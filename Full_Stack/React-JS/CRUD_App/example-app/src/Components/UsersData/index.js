import axios from "axios";
import React, { Component } from "react";
import './index.css'



export default class Data extends Component{
    state={
        users:""
    }
    handleInputChange = (e) =>{
        const user= e.target.value
        this.setState({
            users : user
        })
    }
    userData = (e) =>{
        e.preventDefault();
        const name = this.state.users;
        axios.post('http://localhost:3002/users/',{name})
        .then(output =>{
            console.log(output.data);
            setTimeout(() =>{
                window.location.replace('/')
            },500)
        })
    }

    render(){
        return(
            <div className="add-user">
                <input className='user' name="user" onChange={this.handleInputChange} type="text" placeholder="Enter Name" />
                <button className='button' onClick={this.userData}>Submit</button>
            </div>
        )
    }
}