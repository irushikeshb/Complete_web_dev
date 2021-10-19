import axios from 'axios';
import React, { Component } from 'react'
import './index.css'

export default class Editlist extends Component {
    constructor(props){
        super(props);
        this.state={
            id:props.match.params.id,
            name:props.match.params.name
        }
    }
    handleInputChange = (e) =>{
        const value = e.target.value;
        this.setState({
            name:value
        })
    }
    updateList = (e) =>{
        e.preventDefault();
        const id=this.state.id;
        const name=this.state.name;
        axios.patch("http://localhost:3002/users/"+id,{name}).then(output => {
            console.log(output.data);

            setTimeout(() =>{
                window.location.replace('/')
            },500)
        })
    }
    render(){
        return (
            <div className='main-div'>
                <h1> Edit User Details: </h1>
                <input className='id' type='button' value={this.state.id} disabled />
                <input className='user-list' name='name' type='text' onChange={this.handleInputChange} value={this.state.name}/>
                <button className='button' onClick={this.updateList}> Submit </button>
            </div>
        )
    }
}
