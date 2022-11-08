const SET_ITEM_BAG = "SET_ITEM_BAG";
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

let initalState = {
    bagPage: [],
}
const bagReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_ITEM_BAG: {
            // Հայտարարումենք փոփոխական և իրականցնում ստուգում
            // եթե մեր զանգավում գտնվող էլեմենտի իդ ին համընկնումա էքշոնից եկած էլեմենտի իդ ին մեր
            //փոփոխականի արժեքը դարձնում ենք true
            //և այն ժամանակ երբ մեր փոփոխականի արժեքը false նոր ավելացնում ենք զանգավծում
            let isInArray = false
            state.bagPage.forEach(el => {
                if (el.id === action.item.id)
                    isInArray = true
            })
            if (!isInArray)
                return {
                    ...state,
                    bagPage: [...state.bagPage, action.item]
                }
        }


        case INCREMENT:
            return {
                ...state,
                bagPage: [...state.bagPage].map(el => {
                    if (el.id === action.bagId) {
                        return { ...el, count: el.count + 1 }
                    } else {
                        return { ...el }
                    }
                })
            }
        case DECREMENT:
            return {
                ...state,
                bagPage: [...state.bagPage].map(el => {
                    if (el.id === action.bagId) {
                        if(el.count > 0){
                        return { ...el, count: el.count - 1 }
                        }else {
                            return { ...el }
                        }
                    } else {
                        return { ...el }
                    }
                })
            }

        default:
            return state
    }
}

export const setBagItemAC = (item) => ({ type: SET_ITEM_BAG, item })
export const incrementAC = (bagId) => ({ type: INCREMENT, bagId })
export const decrementAC = (bagId) => ({ type: DECREMENT, bagId })
export default bagReducer