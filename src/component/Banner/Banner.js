import axios from "axios";
import React, { useEffect, useState } from "react";
import BANNER from "../../assets/banner.jpg";
import requests from "../../Axios/request/Request";
import instance from "../../Axios/Instance/Instance";
import { IMAGE_URL } from "../../Axios/Domain";
import TypewriterComponent from "typewriter-effect";
function Banner() {
  const [bannerMovie, setBannerMovie] = useState(null);
  const truncate = (string, n) => {
    return string?.length > n ? string.slice(0, n) + "..." : string;
  };
  useEffect(() => {
    const fetchData = async () => {
      const dataMovie = await instance.get(requests.fetchNetflixOriginals);
      setBannerMovie(
        dataMovie.data.results[
          Math.floor(Math.random() * dataMovie.data.results.length - 1)
        ]
      );
      return dataMovie;
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("${IMAGE_URL}${bannerMovie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
      }}
      className="banner"
    >
      <div className="banner_content">
        <h1 className="banner_name">{bannerMovie?.name}</h1>
        <div>
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <p className="banner_desc">{truncate(bannerMovie?.overview, 150)}</p>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
}

export default Banner;
