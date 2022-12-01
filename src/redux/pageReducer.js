const SEND_PAGE = "SEND_PAGE";

let initialState = {
    mobilePage : {},
}
const pageReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_PAGE: 
            return {
                ...state,
                mobilePage : action.item
            }
        default :
            return state
    }
}

export const sendPageAC = (page) => ({type : SEND_PAGE, item : page})
export default pageReducer