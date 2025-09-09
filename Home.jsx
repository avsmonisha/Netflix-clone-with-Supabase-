import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";

const TMDB_API_KEY = "0eb9040e8a730d980b718894c4839cc0";
const YOUTUBE_API_KEY = "AIzaSyAGP9zx2AhRDE_XFISRZqaogMcuNoCFDvU"; // 🔁 Replace with your actual YouTube API key
const BASE_URL = "https://api.themoviedb.org/3";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="mt-0">
        <Banner />
      </div>

      <div className="-mt-48 relative z-30">
        <Row
          title="Trending Now"
          fetchUrl={`${BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`}
          youtubeApiKey={YOUTUBE_API_KEY}
        />
      </div>

      <Row
        title="Top Rated"
        fetchUrl={`${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`}
        youtubeApiKey={YOUTUBE_API_KEY}
      />
      <Row
        title="Action Movies"
        fetchUrl={`${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`}
        youtubeApiKey={YOUTUBE_API_KEY}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={`${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`}
        youtubeApiKey={YOUTUBE_API_KEY}
      />
    </div>
  );
};

export default Home;
