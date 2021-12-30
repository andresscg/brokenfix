import React from "react";
import "../styles/BodyCard.css";

const BodyCard = () => {
  return (
    <>
      <div className="container fluid">
        <div className="e-card">
          <div className="e-card-image">
            <div className="e-card-title">Electrician</div>
          </div>
          <div className="e-card-content">
            We have experts and qualified people in the area who can help you
            with the installations, fixings and everything you need!
          </div>
        </div>
        <div className="e-card">
          <div className="e-card-image2">
            <div className="e-card-title">House Cleaning</div>
          </div>
          <div className="e-card-content">
            Our cleaning experts were trained by us before joining our teams. Because we
            want the best for you and your home!
          </div>
        </div>
        <div className="e-card">
          <div className="e-card-image3">
            <div className="e-card-title">Plumbing</div>
          </div>
          <div className="e-card-content">
          We have an expert plumbing team capable of answer all your questions. Find the professional that suits your search and contact them!
          </div>
        </div>
        <div className="container fluid">
        <div className="e-card">
          <div className="e-card-image4">
            <div className="e-card-title">Gas&Heating</div>
          </div>
          <div className="e-card-content">
          We have certified professionals in the area willing to solve all the problems in your home, following the appropriate safety regulations.
          </div>
        </div>
        <div className="e-card">
          <div className="e-card-image5">
            <div className="e-card-title">Carpenter</div>
          </div>
          <div className="e-card-content">
          We have professional carpenters and carpenters who collaborate with architects and designers to leave your home as you dreamed it.
          </div>
        </div>
        <div className="e-card">
          <div className="e-card-image6">
            <div className="e-card-title">Locksmith</div>
          </div>
          <div className="e-card-content">
          Our locksmith professionals were trained by us to guarantee the quality of the service, some of them work 24 hours a day in case of emergency!
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default BodyCard;
