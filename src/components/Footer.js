import React from 'react';

import "../css/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <span className="copyright">&copy; {new Date().getFullYear()}</span>
        </footer>
      </div>
    );
  }
}

export default Footer;