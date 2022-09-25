import React from "react";

function BannerName({ name, discount, link }) {
  return (
    <div className="bannerContent">
      <h3>{name}</h3>
      <p>
        Giảm giá bất ngờ <span>{discount}đ</span>
      </p>
      <a href={link}>Xem thêm</a>
    </div>
  );
}

export default BannerName;
