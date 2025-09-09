import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(fetchUrl);
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, [fetchUrl]);

  // Fetch trailer key when a movie is hovered
  useEffect(() => {
    if (!hoveredMovieId) {
      setTrailerKey(null);
      return;
    }

    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${hoveredMovieId}/videos?api_key=0eb9040e8a730d980b718894c4839cc0`
        );
        const data = await res.json();
        const youtubeTrailer = data.results.find(
          (video) =>
            video.site === "YouTube" && video.type === "Trailer"
        );
        setTrailerKey(youtubeTrailer ? youtubeTrailer.key : null);
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setTrailerKey(null);
      }
    };

    fetchTrailer();
  }, [hoveredMovieId]);

  return (
    <div className="p-4">
      <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
      <div className="flex overflow-x-scroll space-x-2">
        {movies.length > 0 ? (
          movies.map((movie) => {
            const isHovered = hoveredMovieId === movie.id;
            return (
              <div
                key={movie.id}
                onMouseEnter={() => setHoveredMovieId(movie.id)}
                onMouseLeave={() => setHoveredMovieId(null)}
                className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${
                  isHovered ? "w-[450px] z-50" : "w-40"
                }`}
                style={{ flex: "0 0 auto" }}
              >
                {!isHovered && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                )}
                {isHovered && trailerKey ? (
                  <iframe
                    width="100%"
                    height="225"
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
                    title={`${movie.title} Trailer`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="rounded-lg"
                  />
                ) : isHovered ? (
                  // If no trailer found, show the image with opacity
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-56 object-cover rounded-lg opacity-70"
                  />
                ) : null}
              </div>
            );
          })
        ) : (
          <p className="text-gray-400">No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Row;
