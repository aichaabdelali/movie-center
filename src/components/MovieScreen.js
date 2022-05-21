import { useState, useEffect } from "react";
import { Row, Col, Card, Container, Image, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MovieScreen = () => {
  const params = useParams();
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";

  const [movie, setMovie] = useState({});
  const [similars, setSimilars] = useState({});

  const fetchMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  const fetchSimilar = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results.slice(0, 4);
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

  useEffect(() => {
    const getSimilar = async () => {
      const similar_movies = await fetchSimilar(
        `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=cb56581cd73993b93e4cd062650225b9&language=en-US`
      );

      setSimilars(similar_movies);
    };
    getSimilar();
  }, [params.id]);

  console.log(movie, similars);

  return (
    <>
      <Container>
        <Link className="btn btn-dark my-4" to="/">
          Go Back
        </Link>
        <Card variant="dark" style={{ width: "60vw", border: "none" }}>
          <Card.Body>
            <Row>
              <Col md={3}>
                <Card.Img
                  src={IMG_URL + movie.poster_path}
                  alt={movie.title}
                  fluid
                />
              </Col>
              <Col md={8}>
                <Card.Title className="title">{movie.title}</Card.Title>
                <Card.Subtitle>
                  Original title : {movie.original_title}
                </Card.Subtitle>
                <Card.Text className="release-runtime">
                  {movie.release_date} . {movie.runtime}min
                </Card.Text>
                <Card.Text className="vote">
                  {" "}
                  {movie.vote_average} /10
                  <span className="vote-count">{movie.vote_count} votes</span>
                </Card.Text>
                <Card.Link href={movie.homepage} target="_blank">
                  {movie.title} : {movie.tagline}
                </Card.Link>
                <Card.Text className="overview">{movie.overview}</Card.Text>
              </Col>
              <Col md={2}>
                {similars.map((similar) => (
                  <Image
                    className="similar-poster"
                    key={similar.id}
                    src={IMG_URL + similar.poster_path}
                    alt={IMG_URL + similar.title}
                    fluid
                  />
                ))}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default MovieScreen;
