import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const UpComing_URL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=cb56581cd73993b93e4cd062650225b9&language=en-US&page=1";
  const Popular_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=cb56581cd73993b93e4cd062650225b9&language=en-US&page=1";
  const NowPlaying_URL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=cb56581cd73993b93e4cd062650225b9&language=en-US&page=1";
  /*https://api.themoviedb.org/3/movie/{id}?api_key=cb56581cd73993b93e4cd062650225b9&language=en-US*/
  return (
    <>
      <Header />
      <main>Movie Center</main>
      <Footer />
    </>
  );
};

export default App;
