import axios from "../apis/axios";
import React, { useCallback, useEffect, useState } from "react";
import req from "../apis/requests";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  const fetchData = useCallback(async () => {
    const {
      data: { results },
    } = await axios(req.fetchNowPlaying);
    const { id: movieId } = results[Math.floor(Math.random() * results.length)];

    const { data: movieDetail } = await axios(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button info">More Information</button>
        </div>
        <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}
