import PropTypes from "prop-types"
import './testimonials.css'
import grid from "./img/grid.svg"

export default function TestimonialNoImage({ children }) {

    return (
        <div className="testimonial-no-image" style={{backgroundImage:`url(${grid})`}}>
            <img className="testimonial-logo" src={grid} />
            {children}
        </div>
    )
}

TestimonialNoImage.propTypes = {
    children: PropTypes.node.isRequired,
  }