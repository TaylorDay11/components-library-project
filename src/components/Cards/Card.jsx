import PropTypes from "prop-types"
import upload from "./img/cloudupload.svg"
import './card.css'

export default function Card({ children, image = upload }) {

    return (
        <div className="card">
            <div className="icon"><img src={image} /></div>
            <div className="content">{children}</div>
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.string
  }