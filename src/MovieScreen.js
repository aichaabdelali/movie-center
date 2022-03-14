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
      <Card>
        <Row>
          <Col md={4}>
            <Image src={IMG_URL + movie.poster_path} alt={movie.title} fluid />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              {movie.genres.map((genre) => (
                <Badge key={genre.id} pill bg="warning" className="px-2 my-2">
                  {genre.name}
                </Badge>
              ))}
              <Card.Subtitle>{movie.release_date}</Card.Subtitle>
              <Card.Text>{movie.original_language}</Card.Text>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Link href={movie.homepage} target="_blank">
                {movie.title} : {movie.tagline}
              </Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default MovieScreen;
