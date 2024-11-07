import PropTypes from "prop-types"
import check from "./img/check-circle.svg"
import excalamation from "./img/Exclamation-circle.svg"
import x from "./img/x-circle.svg"
import info from "./img/info-circle.svg"
import './toast.css'

export default function Toasts({ children, type }) {

    if(type === "success") {
        return (
            <div className="toast success">
                <img className="success-img" src={check} />
                <div className="text">
                    <p className="title">Success</p>
                    <p className="description">{children}</p>
                </div>
            </div>
        )
    }

    if(type === "info") {
        return (
            <div className="toast info">
                <img className="attention-img" src={info} />
                <div className="text">
                    <p className="title">Information</p>
                    <p className="description">{children}</p>
                </div>
            </div>
        )
    }

    if(type === "error") {
        return (
            <div className="toast error">
                <img src={x} />
                <div className="text">
                    <p className="title">Error</p>
                    <p className="description">{children}</p>
                </div>
            </div>
        )
    }

    if(type === "warning") {
        return (
            <div className="toast warning">
                <img className="update-img" src={excalamation} />
                <div className="text">
                    <p className="title">Warning</p>
                    <p className="description">{children}</p>
                </div>
            </div>
        )
    }
}

Toasts.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired
}