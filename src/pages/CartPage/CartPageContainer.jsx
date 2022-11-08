import { connect } from "react-redux";
import CartPage from "./CartPage";
import {incrementAC, decrementAC} from "../../redux/bagReducer"

let mapStateToProps = (state) => {
    return {
        bagPage : state.bagPage.bagPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        incrementStore : (id) => {
            dispatch(incrementAC(id))
        },
        decrementStore : (id) => {
            dispatch(decrementAC(id))
        }
    }
}
export const CartPageContainer = connect(mapStateToProps, mapDispatchToProps)(CartPage)