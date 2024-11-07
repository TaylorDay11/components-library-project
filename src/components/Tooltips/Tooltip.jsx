import React from "react"
import PropTypes from "prop-types"
import './tooltip.css'

const TooltipContext = React.createContext()

export default function Tooltip({children, color, style }) {

    let classStyle = "black-bold"
    let polygonColor = "#262626"

    if (color && style) classStyle = `${color}-${style}`
    else if (color) classStyle = `${color}-bold`
    else if (style) classStyle = `black-${style}`

    if (classStyle == "black-light") polygonColor = "#FFFFFF"
    else if (classStyle == "blue-bold") polygonColor = "#1E40AF"
    else if (classStyle == "blue-light") polygonColor = "#E0E7FF"
    else if (classStyle == "purple-bold") polygonColor = "#A9229B"
    else if (classStyle == "purple-light") polygonColor = "#FFF3FC"
    else if (classStyle == "green-bold") polygonColor = "#47AA5D"
    else if (classStyle == "green-light") polygonColor = "#E7FFF3"

    return (
        <TooltipContext.Provider value={{classStyle}}>
            <div className={`tooltip ${classStyle}`}>
                <div className="tooltip-container">{children}</div>
                <svg className="tooltip-polygon"  width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Polygon 1" d="M15 15L0.27757 0.75L29.7224 0.750003L15 15Z" fill={polygonColor}/>
                </svg>
            </div>
        </TooltipContext.Provider>
    )
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    style: PropTypes.string
}

export { TooltipContext }