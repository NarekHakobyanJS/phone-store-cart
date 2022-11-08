import { connect } from "react-redux";
import Cards from "./Cards";
import {setBagItemAC} from "../../redux/bagReducer"

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
    }
}

export const CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards)