import "../styles/homebody.css";
import React from "react";

const Homebody = () =>{
    return(
        <>
            <div className="hbtitle">
                <h2 className="hbh2">Home services</h2>
            <img className="bhimg" src="../assets/bhimg.jpg"/>
           </div>
           <div className="placeforcomments">
                    <img className="social" src="../assets/social.jpg"/>
                     <blockquote className="blockquote m-3">
                         <p>
                            {' '}
                        "Thanks to Albert and Broke&Fix I've the kitchen I've ever dream!"{' '}
                        </p>
                        <div className="footercard">
                            <footer className="blockquote-footer">
                                 Emily Smith
                            </footer>
                        </div>
                    </blockquote>
         </div>
         <div className="howto">
                <h3 className="howtotitle">How to use our page</h3>
                <div className="howtodiv1">
                    <div className="innerdiv1">
                    <p>1_ Sign In on the right-top of the page if you are looking for a professional <br></br>in one of the many areas we already have.</p>
                    <p>2_ If you don't have an account yet, you can register for free by pressing the <br></br> sign up button.</p>
                    <p>3_ Now you can complete the form o sign up using your Google account, its really <br></br> important to fill every space for the next step.</p>
                    </div>
                    <img className="howtosign" src="../assets/first.jpg"/>
                </div>
                <div>
                    <p className="howtodiv2">Now that you are part of our community, you can look for the professional you need, we have a long list of workers from different areas that can help you with everything you need.
Each worker has their own review, posted by clients from the page that includes a comment and a rating, we want to keep the page and community as well as now, so if you contact one of the workers please, do your own review to help the other customers and us by maintaining a safe environment. </p>
                </div>
         </div>
        </>
    )
}
export default Homebody