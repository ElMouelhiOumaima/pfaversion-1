export const initialState = null
export const  reducer =  (state , action)=>{
    if (action.type==='user'){
        return action.payload
    }
    if (action.type==='admin'){
        return action.payload
    }
    if (action.type==='employee'){
        return action.payload
    }
    if(action.type==="Clear"){
        return null 
    }
    return state 
}