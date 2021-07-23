import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Banner.css";

export default function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <h1>Show Date Picker</h1>}
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Show Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination!</h1>
        <h5>
          Plan a different kind og getaway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}