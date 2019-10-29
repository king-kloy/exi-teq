import React, { Component } from "react";
import "../css/Cameras.css";

import camera1 from "../images/desk.jpg";

class Cameras extends Component {
  render() {
    return (
      <div>
        <p className="hiw">How it works</p>
        <div className="cameras-container">
          <div className="camera-card">
            <img src={camera1} alt="camera-1" className="camera-1" />
            <p>some text here</p>
          </div>
          <div className="camera-card">
            <div className="camera-2">

            </div>
            <p>some text here</p>
          </div>
          <div className="camera-card">
            <div className="camera-3">

            </div>
            <p>some text here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cameras;