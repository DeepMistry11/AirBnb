import React from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
    </div>
  );
}
