import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <head>
        <Navbar />
        <Hero />
      </head>
      <body>
        <main className="home-main d-flex justify-content-center p-5">
          <h1>Home Services Broke&Fix</h1>
        </main>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
