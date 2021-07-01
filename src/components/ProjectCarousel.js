import "../css/projectcarousel.css";

import { Carousel } from "react-bootstrap";

const ProjectCarousel = ({ contentImages }) => {
  return (
    <Carousel>
      {contentImages.map((cont) => (
        <Carousel.Item>
          {cont.link.split(".").pop() === "gif" ? (
            <img className="d-block mx-auto carouVid" src={cont.link} />
          ) : (
            <img className="d-block mx-auto carouImage" src={cont.link} />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
