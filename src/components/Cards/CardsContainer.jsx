import { connect } from "react-redux";
import Cards from "./Cards";
import {setBagItemAC} from "../../redux/bagReducer"
import {sendPageAC} from "../../redux/pageReducer"

let mapStateToProps = (state) => {
    return {
        mobileData : state.cardPage.mobileStore,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setBagItem : (item) => {
            dispatch(setBagItemAC(item))
        },
        sendPage : (item) => {
            dispatch(sendPageAC(item))
        }
    }
}

export const CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards)