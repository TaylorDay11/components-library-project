import PropTypes from "prop-types"

export default function TestimonialQuote({ children, image }) {
    return (
        <div className="testimonial-quote">
            {image && <img className="testimonial-logo" src={image} />}
            {children}
        </div>
    )
}

TestimonialQuote.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.node
  }