import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <body>
        <main className="home-main">
          <div className="d-flex justify-content-center p-5">
            <h1>Home Services Broke&Fix</h1>
          </div>
          <div className="d-flex justify-content-center">
            <img src="https://www.dealsshutter.com/blog/wp-content/uploads/2020/03/Home-Services-Image-30-march-2020.png"></img>
          </div>
          <div className="home-main-comments bg-light d-flex justify-content-end pe-4 text-center">
            <h3 className="p-2">Comments</h3>
            <p>Comments Comments Comments Comments</p>
          </div>
        </main>
      </body>
      <Footer />
    </>
  );
};

export default Home;
