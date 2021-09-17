import React,{ Component } from 'react';

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


	render(){
		return(
			<div>
                <input  name="firstName" type="text" onChange={this.handleInputChange} value={this.state.firstName} placeholder="enter firstname" /> <br />
                <input  name="lastName" type="text" onChange={this.handleInputChange} value={this.state.lastName} placeholder="enter lastname" />  <br />
                <button>Submit</button>
            </div>
		)
	}
}