  
import React from "react";
import "../style/header.css";

const Header = (props) => {
  return (
    <div className={"jumbotron"}>
      <h1>Employee Directory</h1>
      <h6>
       Enter first name of employee to search for colleague
      </h6>
      <input
        type="text"
        name="search"
        placeholder="Search by First Name"
        onChange={props.handleInput}
      />
    </div>
  );
};

export default Header;