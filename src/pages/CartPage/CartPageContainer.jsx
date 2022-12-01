import { connect } from "react-redux";
import CartPage from "./CartPage";
import {incrementAC, decrementAC, incrementPriceAC, decrementPriceAC, removeBagAC} from "../../redux/bagReducer"

let mapStateToProps = (state) => {
    return {
        bagPage : state.bagPage.bagPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        incrementStore : (id) => {
            dispatch(incrementAC(id))
        },
        decrementStore : (id) => {
            dispatch(decrementAC(id))
        },
        removeStore : (id) => {
            dispatch(removeBagAC(id))
        },
        incrementPrice : (id) => {
            dispatch(incrementPriceAC(id))
        },
        decrementPrice : (id) => {
            dispatch(decrementPriceAC(id))
        }
    }
}
export const CartPageContainer = connect(mapStateToProps, mapDispatchToProps)(CartPage)