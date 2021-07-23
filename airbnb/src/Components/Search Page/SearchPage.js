import { Button } from "@material-ui/core";
import React from "react";
import SearchResults from "../Search Results/SearchResults";
import "./SearchPage.css";

export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 august to 30 august - 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResults
        img="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        location="Private room in center of London"
        title="stay at this spacious Edwardian House"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="$30/ night"
        total="$117 total"
      />
      <SearchResults
        img="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        location="Private room in center of London"
        title="stay at this spacious Edwardian House"
        description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
        star={4.73}
        price="$30/ night"
        total="$117 total"
      />
    </div>
  );
}
