import { useState, useEffect } from "react";
import { Image, Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";

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
  }, [params]);

  console.log(movie);

  return (
    <Container>
      <Card variant="dark" className="movie-container">
        <Row>
          <Col md={4}>
            <Image src={IMG_URL + movie.poster_path} alt={movie.title} fluid />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title className="title">{movie.title}</Card.Title>
              <Card.Subtitle className="release-date">
                {movie.release_date.substring(0, 4)}
              </Card.Subtitle>
              <Card.Link href={movie.homepage} target="_blank">
                {movie.title} : {movie.tagline}
              </Card.Link>
              <Card.Text className="overview">{movie.overview}</Card.Text>
              {movie.genres.map((genre) => (
                <Badge key={genre.id} pill bg="warning" className="genres">
                  {genre.name}
                </Badge>
              ))}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default MovieScreen;
