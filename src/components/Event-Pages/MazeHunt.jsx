import { Container, Col, Row, Button } from "react-bootstrap";
import "./EventPage.css";
import Video from "../../components/Video/Video";

import samplePhoto from "../../events-posters/poster-sample.png";

export default function MazeHunt() {
  return (
    <div className="sponsors">
      <Container className="py-5">
        <br />
        <h1
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in-sine"
        >
          <span className="text-silver">Maze-Hunt</span>
        </h1>
        {/*<Video url="https://youtube.com/shorts/thQNSFNlRdM?feature=share" /> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/w3m7ZEUacjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Row>
          {/* <Col>
            <img
              className="spon-logos"
              src={
                "http://res.cloudinary.com/dmrtodlkz/image/upload/v1613587970/bghphlp8dz3qk35sndnh.jpg"
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="spon-logos"
              src={
                "http://res.cloudinary.com/dmrtodlkz/image/upload/v1613587106/yw5ofkpelj1ie1oepiev.jpg"
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="spon-logos"
              src={
                "http://res.cloudinary.com/dmrtodlkz/image/upload/v1613586521/axyjbqgs0cyobpkqfsnl.jpg"
              }
            />
          </Col> */}
          <Col
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="text-left para" id="tale">
            Feeling bored? Want to experience the thrilling rush of adrenaline once again? Well, buckle your seatbelts and get ready as GENESYS brings you MAZEHUNT, an action-packed, thrilling, and rewarding treasure hunt, because we know Treasure Hunts make much better stories when there's treasure at the end.
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
