import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Navigation extends Component{
    render(){
        return(
            <div>
                <h1> Welcome To Manchester United F.C. </h1>
                <ul>
                    <li><Link className='Links' to='/'> Home </Link></li>
                    <li><Link className='Links' to='./About'> About Us </Link></li>
                    <li><Link className='Links' to='./Contact' > Contact </Link></li>
                    <li><Link className='Links' to='./Players' > Players </Link></li>
                </ul>
            </div>
        )
    }
}
