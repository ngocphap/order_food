import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import { orange } from "@mui/material/colors";
import React, { useState } from "react";

function ItemCard({ imgSrc, name, ratings, price }) {
    const [isfavourite,setFavourite]=useState(false);
    const [currentValue,setCurrentValue]=useState(Math.floor(ratings))

    const handleClick=(value)=>{
setCurrentValue(value);
    }
  return (
    <>
      <div className="itemCard">
        <div className={`isfavourite ${isfavourite ?"active":""}`}
        onClick={()=>setFavourite(!isfavourite)}>
          <Favorite />
        </div>

        <div className="imgBox">
          <img src={imgSrc} alt="" className="itemImg"/>
        </div>
        <div className="imgContent">
          <h3 className="itemName" >{name}</h3>
          <div className="bottom">
            <div className="ratings">{Array.apply(null, { length: 5 }).map((e,i)=>(
                <i key={i} className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={()=>handleClick(i+1)}
                >
                    <StarRounded/>
                </i>
            ))}
            <h3 className="price" >{price} <span>đ</span> </h3>
            </div>
            <i className="addtoCart">
                <AddRounded/>
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
