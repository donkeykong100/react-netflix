import React from "react";
import req from "../../apis/requests";
import Banner from "../../components/Banner";
import Row from "../../components/Row";

export default function MainPage() {
  return (
    <>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id=" NO"
        fetchUrl={req.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={req.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={req.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={req.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={req.fetchComedyMovies} />
    </>
  );
}
