import "./index.css"
import Badge from "./components/Badges/Badge.jsx"
import Banner from "./components/Banners/Banner.jsx"
import Card from "./components/Cards/Card.jsx"
import TestimonialWithImage from "./components/TestimonialsWithImage/index.js"
import testimonialImage from "./components/TestimonialsWithImage/img/testimonial-image.jpeg"
import TestimonialNoImage from "./components/TestimonialsNoImage/index.js"
import testimonialLogo from "./components/TestimonialsNoImage/img/Logo.svg"
import Tooltip from "./components/Tooltips/index.js"
import Toast from "./components/Toasts/Toast.jsx"

export default function App() {

  return (
    <>
      <h1>Components Library++</h1>
      <h2>Badges</h2>
      <div className="row">
        <Badge color="gray" shape="square">Gray Badge</Badge>
        <Badge color="red" shape="square">Red Badge</Badge>
        <Badge color="yellow" shape="square">Yellow Badge</Badge>
        <Badge color="green" shape="square">Green Badge</Badge>
        <Badge color="blue" shape="square">Blue Badge</Badge>
        <Badge color="indigo" shape="square">Indigo Badge</Badge>
        <Badge color="purple" shape="square">Purple Badge</Badge>
        <Badge color="pink" shape="square">Pink Badge</Badge>
      </div>
      <div className="row">
        <Badge color="gray" shape="pill">Gray Badge</Badge>
        <Badge color="red" shape="pill">Red Badge</Badge>
        <Badge color="yellow" shape="pill">Yellow Badge</Badge>
        <Badge color="green" shape="pill">Green Badge</Badge>
        <Badge color="blue" shape="pill">Blue Badge</Badge>
        <Badge color="indigo" shape="pill">Indigo Badge</Badge>
        <Badge color="purple" shape="pill">Purple Badge</Badge>
        <Badge color="pink" shape="pill">Pink Badge</Badge>
      </div>

      <h2>Banners</h2>
      <div className="row">
        <Banner type="success"></Banner>
      </div>
      <div className="row">
        <Banner type="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      </div>
      <div className="row">
        <Banner type="attention"></Banner>
      </div>
      <div className="row">
        <Banner type="attention">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      </div>
      <div className="row">
        <Banner type="problem"></Banner>
      </div>
      <div className="row">
        <Banner type="problem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      </div>
      <div className="row">
        <Banner type="update"></Banner>
      </div>
      <div className="row">
        <Banner type="update">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
      </div>

      <h2>Cards</h2>
      <div className="row">
        <Card>
          <h3>Easy Deployment</h3>
          <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </Card>
      </div>

      <h2>Testimonials</h2>
      <TestimonialWithImage image={testimonialImage}>
        <TestimonialWithImage.Quote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
          <TestimonialWithImage.Details>
            <TestimonialWithImage.Name>May Andersons</TestimonialWithImage.Name>
            <TestimonialWithImage.Company>Workcation, CTO</TestimonialWithImage.Company> 
          </TestimonialWithImage.Details>
        </TestimonialWithImage.Quote>
      </TestimonialWithImage>

      <TestimonialNoImage>
        <TestimonialNoImage.Quote image={testimonialLogo}>
          {`“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.”`}
          <TestimonialNoImage.Details>
            <TestimonialNoImage.Name>May Andersons</TestimonialNoImage.Name>
            <TestimonialNoImage.Company>Workcation, CTO</TestimonialNoImage.Company> 
          </TestimonialNoImage.Details>
        </TestimonialNoImage.Quote>
      </TestimonialNoImage>

      <h2>Tooltip</h2>
      <div className="row">
        <Tooltip color="black" style="bold">
          <Tooltip.Image>{"inbox"}</Tooltip.Image>
          <Tooltip.Content>
            <Tooltip.Title>
              Archive notes
            </Tooltip.Title>
            <Tooltip.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip.Description>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip color="black" style="light">
          <Tooltip.Image>{"inbox"}</Tooltip.Image>
          <Tooltip.Content>
            <Tooltip.Title>
              Archive notes
            </Tooltip.Title>
            <Tooltip.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip.Description>
          </Tooltip.Content>
        </Tooltip>
      </div>

      <div className="row">
        <Tooltip color="blue" style="bold">
          <Tooltip.Image>{"inbox"}</Tooltip.Image>
          <Tooltip.Content>
            <Tooltip.Title>
              Archive notes
            </Tooltip.Title>
            <Tooltip.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip.Description>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip color="blue" style="light">
          <Tooltip.Image>{"inbox"}</Tooltip.Image>
          <Tooltip.Content>
            <Tooltip.Title>
              Archive notes
            </Tooltip.Title>
            <Tooltip.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip.Description>
          </Tooltip.Content>
        </Tooltip>
      </div>

      <div className="row">
        <Tooltip color="purple" style="bold">
          <Tooltip.Image>{"inbox"}</Tooltip.Image>
          <Tooltip.Content>
            <Tooltip.Title>
              Archive notes
            </Tooltip.Title>
            <Tooltip.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip.Description>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip color="purple" style="light">
          <Tooltip.Image>{"inbox"}</Tooltip.Image>
          <Tooltip.Content>
            <Tooltip.Title>
              Archive notes
            </Tooltip.Title>
            <Tooltip.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip.Description>
          </Tooltip.Content>
        </Tooltip>
      </div>

      <div className="row">
        <Tooltip color="green" style="bold">
          <Tooltip.Image>{"inbox"}</Tooltip.Image>
          <Tooltip.Content>
            <Tooltip.Title>
              Archive notes
            </Tooltip.Title>
            <Tooltip.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip.Description>
          </Tooltip.Content>
        </Tooltip>

        <Tooltip color="green" style="light">
          <Tooltip.Image>{"inbox"}</Tooltip.Image>
          <Tooltip.Content>
            <Tooltip.Title>
              Archive notes
            </Tooltip.Title>
            <Tooltip.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip.Description>
          </Tooltip.Content>
        </Tooltip>
      </div>

      <h2>Toasts</h2>
      <div className="row">
        <Toast type="success">Your work has been saved</Toast>
        <Toast type="warning">A network error was detected</Toast>
      </div>

      <div className="row">
        <Toast type="info">Please read updated information</Toast>
        <Toast type="error">Please re-save your work again</Toast>
      </div>
    </>
  )
}

