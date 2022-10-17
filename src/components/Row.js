import React, { useCallback, useEffect, useState } from "react";
import axios from "../apis/axios";
import "./Row.css";

export default function Row({ title, fetchUrl, id, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = useCallback(async () => {
    const {
      data: { results },
    } = await axios(fetchUrl);
    setMovies(results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
    </section>
  );
}
