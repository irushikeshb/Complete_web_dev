import React from "react";
import { Link } from "react-router-dom";
import './index.css'
function playerContainer(props){

    return(
        <center>
        <div className='text-box'>
            <h4><Link className='back' to='/Players' >Back</Link></h4>
            <h1 className='details'> Player Details </h1>

            <h2 className='name'> {props.match.params.name} </h2>
            <img src={require("../../assets/image/" +props.match.params.image).default} alt="Football"/>
        </div>
        </center>
    )
}

export default playerContainer;
