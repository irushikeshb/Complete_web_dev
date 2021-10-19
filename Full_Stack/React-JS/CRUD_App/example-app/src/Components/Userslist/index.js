import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class Userslist extends Component{
    state={
        users:[],
    }
    componentDidMount(){
        axios.get('http://localhost:3002/users').then(output=>{
            console.log(output.data);
            this.setState({
                users:output.data
            })
            console.log(this.state.users.dsts);
        })
    }
    deleteUser=(e) =>{
        e.preventDefault();
        const id = e.target.id
        axios.delete('http://localhost:3002/users/'+id).then(output =>{
            console.log(output.data);
            setTimeout(() =>{
                window.location.reload('/')
            },500)
        })
    }
    render(){
        return (
            <div className="userslist">
                <h1> List Of Users </h1>
                {this.state.users.map((users=>
                <div className='list-main'>
                    <li className='list-items' id={users.id}>{users.name}</li>
                    <li className='list-items'><Link className='edit' to={"/editlist/" + users.id + "/" + users.name}>Edit</Link></li>
                    <button className='button' id={users.id} onClick={this.deleteUser}>Delete</button>
                </div>
                ))}
            </div>
        )
    }
}
