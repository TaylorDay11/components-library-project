import PropTypes from "prop-types"
import './badge.css'

export default function Badge({ children, shape, color }) {
    return (
        <div className={`badge ${shape} ${color}`}>{children}</div>
    )
}

Badge.propTypes = {
    children: PropTypes.string.isRequired,
    shape: PropTypes.string,
    color: PropTypes.string
  }