import { useState, useEffect } from "react";
import { Image, Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MovieScreen = () => {
  const params = useParams();
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";

  const [movie, setMovie] = useState({});

  const fetchMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getMovie = async () => {
      const moviesdb = await fetchMovie(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=cb56581cd73993b93e4cd062650225b9&language=en-US`
      );

      setMovie(moviesdb);
    };
    getMovie();
  }, [params.id]);

  console.log(movie);

  return (
    <Container>
      <Card variant="dark">
        <Card.Body>
          <Row>
            <Col md={4}>
              <Image
                src={IMG_URL + movie.poster_path}
                alt={movie.title}
                fluid
              />
            </Col>
            <Col md={7}>
              <Card.Title className="title">{movie.title}</Card.Title>
              <Card.Subtitle>
                Original title : {movie.original_title}
              </Card.Subtitle>
              <Card.Text className="release-runtime">
                {movie.release_date} . {movie.runtime}min
              </Card.Text>
              <Card.Text className="vote">
                <FaStar
                  style={{
                    color: "#FFCE45",
                    width: "28px",
                    height: "28px",
                    margin: "6px 10px 6px 0px",
                  }}
                />{" "}
                <div>
                  {movie.vote_average} /10
                  <span className="vote-count">{movie.vote_count} votes</span>
                </div>
              </Card.Text>
              <Card.Link href={movie.homepage} target="_blank">
                {movie.title} : {movie.tagline}
              </Card.Link>
              <Card.Text className="overview">{movie.overview}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieScreen;
