import PropTypes from "prop-types"

export default function TooltipDescription({children}) {
    return (
        <div className="tooltip-description">{children}</div>
    )
}

TooltipDescription.propTypes = {
    children: PropTypes.node.isRequired
}