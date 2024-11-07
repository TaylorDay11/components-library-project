import PropTypes from "prop-types"

export default function TooltipTitle({children}) {
    return (
        <div className="tooltip-title">{children}</div>
    )
}

TooltipTitle.propTypes = {
    children: PropTypes.node.isRequired
}