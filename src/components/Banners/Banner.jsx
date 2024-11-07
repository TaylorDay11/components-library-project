import PropTypes from "prop-types"
import check from "./img/check-circle.svg"
import excalamation from "./img/exclamation.svg"
import x from "./img/x-circle.svg"
import info from "./img/info-circle.svg"
import './banner.css'

export default function Banner({ children, type }) {
    if(type === "success") {
        return (
            <div className="banner success">
                <img className="success-img" src={check} />
                <div className="text">
                    <p className="title">Congratulations</p>
                    {children && <p>{children}</p>}
                </div>
            </div>
        )
    }

    if(type === "attention") {
        return (
            <div className="banner attention">
                <img className="attention-img" src={excalamation} />
                <div className="text">
                    <p className="title">Attention</p>
                    {children && <p>{children}</p>}
                </div>
            </div>
        )
    }

    if(type === "problem") {
        return (
            <div className="banner problem">
                <img className="problem-img" src={x} />
                <div className="text">
                    <p className="title">There is a problem with your application</p>
                    {children && <p>{children}</p>}
                </div>
            </div>
        )
    }

    if(type === "update") {
        return (
            <div className="banner update">
                <img className="update-img" src={info} />
                <div className="text">
                    <p className="title">Update available</p>
                    {children && <p>{children}</p>}
                </div>
            </div>
        )
    }
    
}

Banner.propTypes = {
    children: PropTypes.string,
    type: PropTypes.string.isRequired
  }