import { Card, Button, Row, Col } from "react-bootstrap";

const Movie = ({ movie }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={IMG_URL + movie.poster_path} />
      <Card.Body>
        <Row>
          <Col md={10}>
            <Card.Title>{movie.title}</Card.Title>
          </Col>
          <Col md={2}>
            {" "}
            <Card.Text>{movie.vote_average}</Card.Text>
          </Col>
        </Row>
        <Row>
          <Button variant="outline-dark">View Details</Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Movie;
