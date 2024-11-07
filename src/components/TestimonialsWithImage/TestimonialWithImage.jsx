import PropTypes from "prop-types"
import './testimonials.css'

export default function TestimonialWithImage({ children, image }) {

    return (
        <div className="testimonial-with-image">
            <div className="testimonial-container">
                <div className="testimonial-image" style={{backgroundImage: `url(${image})`}}></div>
                { children }
            </div>
        </div>
    )
}

TestimonialWithImage.propTypes = {
    children: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired
  }