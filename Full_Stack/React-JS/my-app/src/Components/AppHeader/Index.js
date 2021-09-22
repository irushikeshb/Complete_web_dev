import React from 'react'
import './style.css'
export default function AppHeader(props){
		return (
			<div class="head-div">
				<h1 class="main-header" >Welcome To React App!!</h1>
				<h3>Name: {props.username}</h3>
				<h3>Location: {props.location}</h3>
			</div>
		)
}