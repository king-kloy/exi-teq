import React, { Component } from "react";
import "../css/OurTeam.css";

import user from "../images/desk.jpg";

class OurTeam extends Component {
  render() {
    return (
      <div>
        <p className="hiw">Our Team</p>
        <div className="teams-container">
          <div className="team-card">
            <img src={user} alt="user" className="user" />
            <div className="role">
              <span className="name">Kluvi trinity</span>
              <br />
              <span>Co-founder/Web developer</span>
            </div>
          </div>
          <div className="team-card">
            <img src={user} alt="user" className="user" />
            <div className="role">
              <span className="name">Kluvi trinity</span>
              <br />
              <span>Co-founder/Web developer</span>
            </div>
          </div>
          <div className="team-card">
            <img src={user} alt="user" className="user" />
            <div className="role">
              <span className="name">Kluvi trinity</span>
              <br />
              <span>Co-founder/Web developer</span>
            </div>
          </div>  
        </div>
        <div className="t-container">
          <div className="team-card">
            <img src={user} alt="user" className="user" />
            <div className="role">
              <span className="name">Kluvi trinity</span>
              <br />
              <span>Co-founder/Web developer</span>
            </div>
          </div>
         <div className="team-card">
            <img src={user} alt="user" className="user" />
            <div className="role">
              <span className="name">Kluvi trinity</span>
              <br />
              <span>Co-founder/Web developer</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeam;