import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import App from '../../App'
import About from '../About'
import Contact from '../Contact'
import Photos from '../Photos'

export default class Navigation extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/' component={App} /></li>
                    <li><Link to='./About' component={About} /></li>
                    <li><Link to='./Contact' component={Contact} /></li>
                    <li><Link to='./Photos' component={Photos} /></li>
                </ul>
            </div>
        )
    }
}
