import PropTypes from "prop-types"

export default function TestimonialName({ children }) {
    return (
        <div className="testimonial-name">{children}</div>
    )
}

TestimonialName.propTypes = {
    children: PropTypes.string.isRequired
  }