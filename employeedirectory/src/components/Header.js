import React from "react";
import Search from "./Search"

const style = {
    head: {
        color: "white",
        fontWeight: "bold",
        fontFamily: "Times New Roman, Times, serif"
    }
}

const Header = () => {
return (
    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand" href="/" style={style.head}>Employee Directory</a>
      <Search />
    </nav>
    )
}
          
export default Header;