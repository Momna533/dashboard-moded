import React from "react";
import "./Home.css";
import Nav from "../../Components/Nav/Nav";
function Home() {
  return (
    <>
      <div className="container">
        <div className="container_content">
          <div className="container_content_left">
            <Nav />
          </div>
          <div className="container_content_right">i am home right</div>
        </div>
      </div>
    </>
  );
}
export default Home;
