import PropTypes from "prop-types"
import quote from "./img/quote.svg"

export default function TestimonialQuote({ children }) {
    return (
        <div className="testimonial-quote">
            <img className="testimonial-quotations" src={quote} />
            {children}
        </div>
    )
}

TestimonialQuote.propTypes = {
    children: PropTypes.node.isRequired
  }