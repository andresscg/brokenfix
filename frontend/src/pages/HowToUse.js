import React from "react";
import "../styles/howto.css";

const Howto = () => {
  return (
    <>
      <div className="background">     
      </div>
      <h3 className="howtotitle">How to use our page</h3>
        <div className="container fluid">
        <div className="e-card-ht">
          <div className="e-card-image-1">
            <div className="e-card-titleht">First step:</div>
          </div>
          <div className="e-card-content">
            1_ Sign In on the right-top of the page if you are looking for a
            professional in one of the many areas we already have.
          </div>
        </div>
        <div className="e-card-ht">
          <div className="e-card-image-2">
            <div className="e-card-titleht">Step two:</div>
          </div>
          <div className="e-card-content">
            2_ If you don't have an account yet, you can register for free by
            pressing the sign up button.
          </div>
        </div>
        <div className="e-card-ht">
          <div className="e-card-image-3">
            <div className="e-card-titleht">Step three:</div>
          </div>
          <div className="e-card-content">
          3_ You can complete the form o sign up using your Google account, its important to fill every space for the next step
          </div>
        </div>
        <div>
            <p className="howtodiv2">Now that you are part of our community, you can look for the professional you need, we have a long list of workers from different areas that can help you with everything you need.
Each worker has their own review, posted by clients from the page that includes a comment and a rating, we want to keep the page and community as well as now, so if you contact one of the workers please, do your own review to help the other customers and us by maintaining a safe environment.
</p>
<div className="final">
<p>Thanks. <br></br> -B&F Team</p>
</div>
        </div>
      </div>
    </>
  );
};
export default Howto;
