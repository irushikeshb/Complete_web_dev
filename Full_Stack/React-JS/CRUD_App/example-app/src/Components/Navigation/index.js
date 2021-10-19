import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Navigations() {
    return (
        <div className="Nav-Container">
            <ul>
                <li><Link className='list-item' to='/'>All Users List</Link></li>
                <li><Link className='list-item' to='./UsersData'>Add User</Link></li>
            </ul>
        </div>
    )
}