import React from "react"
import PropTypes from "prop-types"
import { TooltipContext } from "./Tooltip.jsx"
 
export default function TooltipImage({children}) {

    const { classStyle } = React.useContext(TooltipContext)

    let imageColor = "#C7C7C7"

    if (classStyle == "black-light") imageColor = "#6B7280"
    else if (classStyle == "blue-bold") imageColor = "#7EA6F2"
    else if (classStyle == "blue-light") imageColor = "#1C51B9"
    else if (classStyle == "purple-bold") imageColor = "#F462E6"
    else if (classStyle == "purple-light") imageColor = "#C7369E"
    else if (classStyle == "green-bold") imageColor = "#C1FFCF"
    else if (classStyle == "green-light") imageColor = "#3C8C4E"

    console.log(imageColor)

    if (children === "inbox") {
        return (
            <svg className="tooltip-image" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Inbox">
                    <path stroke={imageColor} id="Icon" d="M20 13V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V13M20 13V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V13M20 13H17.4142C17.149 13 16.8946 13.1054 16.7071 13.2929L14.2929 15.7071C14.1054 15.8946 13.851 16 13.5858 16H10.4142C10.149 16 9.89464 15.8946 9.70711 15.7071L7.29289 13.2929C7.10536 13.1054 6.851 13 6.58579 13H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
        )
    }

}

TooltipImage.propTypes = {
    children: PropTypes.node.isRequired
}