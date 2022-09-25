import React from "react";
import {} from "@mui/material";
import { SearchRounded, ShoppingCartRounded ,BarChart} from "@mui/icons-material";
function Header() {
  return (
    <header>
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/SG50_logo.jpg" alt="" className="logo" /> */}
      <h1>Home</h1>
      <div className="inputBox">
        <SearchRounded className="searchIcon"></SearchRounded>
        <input className="inputBorder"type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>

      {/* <div className="profileContainer">
        <div className="imgBox">
          <img className="profilePic" src="https://vcdn1-kinhdoanh.vnecdn.net/2017/03/10/anh-3-2168-1489119927.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=1lMCJc00r0cYbgSW5XgovQ" alt="" />
        </div>

        <h2 className="userName"> Phapne</h2>
      </div> */}

      {/* <div className="toggleMenu">
        <BarChart className="toggleIcon"></BarChart>
      </div> */}
    </header>
  );
}

export default Header;
