import { BUSINESS_NEWS, HEADLINES, SPORTS_NEWS, TECHNOLOGY_NEWS } from "../Actions/types"

const initialState = {
    headlines:[],
    business_News:[],
    technology_news:[],
    sports_news:[]
}

const newsReducer = (state = initialState,action) => {
    const newState = {...state}
    switch(action.type){
        case HEADLINES:
            newState.headlines = action.payload
            break;
        case BUSINESS_NEWS:
            newState.business_News = action.payload
            break;
        case TECHNOLOGY_NEWS:
            newState.technology_news = action.payload
            break;
        case SPORTS_NEWS:
            newState.sports_news = action.payload
            break;
        default:
            return newState 
    }
    return newState;
}

export default newsReducer;
