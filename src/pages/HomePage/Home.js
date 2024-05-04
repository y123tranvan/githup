import React from "react";
import videoHomePage from "../../asset/videohomepage.mp4";
function Home() {
  return (
    <div className="home-container">
      <div className="wrapper-video">
        <video style={{ width: "100vw" , position:"fixed" , bottom:0}} autoPlay muted loop>
          <source src={videoHomePage} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
export default Home;
