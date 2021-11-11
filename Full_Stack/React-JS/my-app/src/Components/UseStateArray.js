import React from 'react'
import '../App.css'

const UseStateArray = () => {
    const bioData= [
        {
            id:0, myName: "Rushikesh", myAge: "22" 
        },
        {
            id:0, myName: "Raju", myAge: "23" 
        },
        {
            id:0, myName: "Sanju", myAge: "25" 
        }
    ]
    return (
        <div>
            {
                bioData.map((currElm)=> <h1 className="header">Name: {currElm.myName} & Age: {currElm.myAge}</h1>)
            }
        </div>
    )
}

export default UseStateArray;
