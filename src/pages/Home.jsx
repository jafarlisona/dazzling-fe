import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Slider from "../components/Slider";
import Posts from "../components/Posts";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dazzling | Home</title>
      </Helmet>
      <Slider />
      <Posts />
    </HelmetProvider>
  );
}

export default Home;
