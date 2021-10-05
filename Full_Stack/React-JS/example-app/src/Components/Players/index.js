import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

export default function Players(props){
    const renderPlayers = ()=>{
        return props.Players.map((Player)=>(
            <li><Link to={"/Players/" +Player.id+ "/" +Player.name+ "/" +Player.image} className='player-links'>{Player.name}</Link></li>
        ))
    }
    return(
        <div className="main-div" >
            <h1>Our Top Players-</h1>
            <ul className='f-players'>
                {renderPlayers()}
            </ul>
        </div>
    );
}