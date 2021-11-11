import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setBusinessNews } from "../../Actions/setBusinessNews";
import { setHeadlines } from "../../Actions/setHeadines";
import { setSportsNews } from "../../Actions/setSportsNews";
import { setTechnologyNews } from "../../Actions/setTechnologyNews";
import { getBusinessNews } from "../../Apis/getBusinessNews";
import { getHeadlines } from "../../Apis/getHeadlines";
import { getSportsNews } from "../../Apis/getSportsNews";
import { getTechnologyNews } from "../../Apis/getTechnologyNews";


export default function AppLoader(){
    
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()
    let history = useHistory()

    useEffect(() =>{
        const getData = async() =>{

            const news1 =  await getHeadlines()
            console.log(news1);
            setHeadlines(dispatch,news1)

            const news2 = await getTechnologyNews()
            console.log(news2);
            setTechnologyNews(dispatch,news2)

            const news3 = await getBusinessNews()
            console.log(news3);
            setBusinessNews(dispatch,news3)

            const news4 = await getSportsNews()
            console.log(news4);
            setSportsNews(dispatch,news4)

            setLoading(true)
        }
        getData()
    },[dispatch])

    const button = loading ? <button onClick={() => history.push({pathname:'/headlines'})}>Click here to Continue! </button>
                    : <button> Please Wait...</button> 
    return (
        <div>
            <h1> Please Wait...</h1>
            <h3> Your Application is Loading... </h3> 
                {button}
        </div>
    )
}