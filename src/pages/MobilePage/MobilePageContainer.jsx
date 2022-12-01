import { connect } from "react-redux";
import MobilePage from "./MobilePage";


let mapStateToProps = (state) => {
    return {
        mobilePage : state.page.mobilePage
    }
}

const MobilePageContainer = connect(mapStateToProps, null)(MobilePage)
export default MobilePageContainer