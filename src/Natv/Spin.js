import Loader from "react-loader-spinner";
import {useSelector} from "react-redux";

const Spin = (props) => {
    const spinner = useSelector(state => state.appReducer.loading)
    return(
        <div className="d-flex justify-content-center">
            <Loader
                type="TailSpin"
                color="#c20937"
                height={100}
                width={100}
                visible={spinner}
            />
        </div>
    )
}

export default Spin;