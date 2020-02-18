import React from "react";

const Search = (props) => {
    return (
    <form className="form-inline">
      <input 
      className="form-control mr-sm-2" 
      type="text" 
      placeholder="Search" aria-label="Search"
      id="search"
      onChange={props.handleInputChange}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
      onClick = {props.handleFormSubmit}>Search</button>
    </form>
    )    
}

export default Search