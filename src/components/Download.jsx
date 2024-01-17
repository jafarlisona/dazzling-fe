import React from "react";
import { Link } from "react-router-dom";

function Download() {
  return (
    <div className="download">
      <div className="download-container">
        <p>Do you like this awesome and free WordPress WooCommerce theme?</p>
        <Link to="#">Download Now!</Link>
      </div>
    </div>
  );
}

export default Download;
