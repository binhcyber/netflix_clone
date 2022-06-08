import React from "react";
import Banner from "../Banner/Banner";
import Nav from "../nav/Nav";
import Row from "../Row/Row";
import request from "../../Axios/request/Request";
import localstorageserv from "../../LocalStorage/LocalStorage";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
export default function HomeScreen() {
  const history = useHistory();
  return localstorageserv.userInfor.get() ? (
    <div>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isRowLarge
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Footer />
    </div>
  ) : (
    <Redirect to={"/signIn"} />
  );
}
