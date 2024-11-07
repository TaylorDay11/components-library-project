import React from "react"
import PropTypes from "prop-types"
import { TooltipContext } from "./Tooltip.jsx"

export default function TooltipContent({children}) {

    const { classStyle } = React.useContext(TooltipContext)

    let xColor = "#C7C7C7"

    if (classStyle == "black-light") xColor = "#6B7280"
    else if (classStyle == "blue-bold") xColor = "#D8D8D8"
    else if (classStyle == "blue-light") xColor = "#1C51B9"
    else if (classStyle == "purple-bold") xColor = "#D8D8D8"
    else if (classStyle == "purple-light") xColor = "#C7369E"
    else if (classStyle == "green-bold") xColor = "#D8D8D8"
    else if (classStyle == "green-light") xColor = "#3C8C4E"

    return (
        <div className="tooltip-content">
            <div>{children}</div>
            <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="X">
                        <path fill={xColor} id="Icon" fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"/>
                    </g>
                </svg>
            </div>
        </div>
    )
}

TooltipContent.propTypes = {
    children: PropTypes.node.isRequired
}