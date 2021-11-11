import axios from "axios";


let data = null
export const getSportsNews = async()=>{
    await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7c8bc201baa24acd8f4fb077880efead')
    .then(res=>{
        console.log(res);
        data = res.data.articles
    })
    .catch(err=>{
        console.log(err);
    })
    return data;
}