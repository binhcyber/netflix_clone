import React, { useEffect, useState } from "react";
import { IMAGE_URL } from "../../Axios/Domain";
import instance from "../../Axios/Instance/Instance";
function Row({ title, fetchUrl, isRowLarge = false }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const dataMovie = await instance.get(fetchUrl);
      console.log(dataMovie.data.results);
      setMovies(dataMovie.data.results);
      return dataMovie;
    };
    fetchData();
  }, [fetchUrl]);
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
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Row;
