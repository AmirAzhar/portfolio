// Styles
import "./projectCarousel.css";

// Packages
import { Carousel } from "react-bootstrap";

const ProjectCarousel = ({ contentImages }) => {
  return (
    <Carousel>
      {contentImages.map((cont) => (
        <Carousel.Item>
          {cont.url.split(".").pop() === "gif" ? (
            <img
              className="d-block mx-auto carouVid"
              src={cont.url}
              alt={`${contentImages.title}`}
            />
          ) : (
            <img
              className="d-block mx-auto carouImage"
              src={cont.url}
              alt={`${contentImages.title}`}
            />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
