import PropTypes from "prop-types"

export default function TestimonialCompany({ children }) {
    return (
        <div className="testimonial-company">{children}</div>
    )
}

TestimonialCompany.propTypes = {
    children: PropTypes.string.isRequired
  }