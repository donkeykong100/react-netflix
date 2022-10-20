import axios from "../../apis/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../components/MovieModal/MovieModal.css";

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async function fetchData() {
      const { data } = await axios(`/movie/${movieId}`);
      setMovie(data);
    })();
  }, [movieId]);

  if (!movie) return <h1>Loading...</h1>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path ? movie.backdrop_path : movie.poster_path
        }`}
        alt="poster"
      />
    </section>
  );
}
