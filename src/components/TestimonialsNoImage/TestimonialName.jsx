import PropTypes from "prop-types"
import divider from "./img/Divider.svg"

export default function TestimonialName({ children }) {
    return (
        <>
            <div className="testimonial-name">{children}</div>
            <div><img className="testimonial-divider" src={divider} /></div>
        </>
    )
}

TestimonialName.propTypes = {
    children: PropTypes.string.isRequired
  }