import { SPORTS_NEWS } from "./types"


export const setSportsNews = async(dispatch,data) =>{
    dispatch({
        type: SPORTS_NEWS,
        payload: data
    })
}