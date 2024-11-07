import PropTypes from "prop-types"

export default function TestimonialDetails({children}) {
    return (
        <div className="testimonial-details">{children}</div>
    )
}

TestimonialDetails.propTypes = {
    children: PropTypes.node.isRequired
  }