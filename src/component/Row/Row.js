import React, { useEffect, useState } from "react";
import { IMAGE_URL } from "../../Axios/Domain";
import instance from "../../Axios/Instance/Instance";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isRowLarge = false }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const dataMovie = await instance.get(fetchUrl);
      setMovies(dataMovie.data.results);
      return dataMovie;
    };
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleTrailer = (movie) => {
    console.log(movie);
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const trailerParams = new URL(url).searchParams.get("v");
          console.log(trailerParams);
          setTrailer(trailerParams);
        })
        .catch((error) => {
          alert("No trailer for this movie");
        });
    }
  };
  return (
    <div className="row">
      <div className="row_content">
        <h2 className="row_title">{title}</h2>
        <div className="row_image">
          {movies?.map(
            (movie) =>
              ((isRowLarge && movie.poster_path) ||
                (!isRowLarge && movie.backdrop_path)) && (
                <img
                  className={`row_backdrop ${isRowLarge && "row_poster"}`}
                  src={`${IMAGE_URL}${
                    isRowLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  onClick={() => {
                    handleTrailer(movie);
                  }}
                />
              )
          )}
        </div>
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
