import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='./About'> About Us </Link></li>
                    <li><Link to='./Contact' > Contact </Link></li>
                    <li><Link to='./Photos' > Photos </Link></li>
                </ul>
            </div>
        )
    }
}
