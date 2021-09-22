import React,{ Component } from 'react';
import './style.css'

export default class AppBody extends Component{
	constructor(props){
	super(props);
this.state={
'firstName':'',
'lastName':''
}
}

handleInputChange = (e) =>{
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
    [name]:value
    })
    console.log(this.state.firstName);
    console.log(this.state.lastName);
}
onSubmit = (e) => {
    const result = parseInt(this.state.firstName) + parseInt(this.state.lastName);
    this.setState({
        result: result
    })
}


	render(){
		return(
			<div class="div-body">
                <input class="name" name="firstName" type="text" onChange={this.handleInputChange} value={this.state.firstName} placeholder="enter firstname" /> <br />
                <input class="name" name="lastName" type="text" onChange={this.handleInputChange} value={this.state.lastName} placeholder="enter lastname" />  <br />
                <button class="btn" onClick={this.onSubmit}>Submit</button>
                <br /><br />
                <h4 class="name-1">{this.state.firstName} {this.state.lastName}</h4>
                <br /><br />
                <h4 class="name-1">{this.state.result}</h4>
            </div>
		)
	}
}