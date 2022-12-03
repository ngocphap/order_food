import {
  PersonRounded,
  MoreHorizRounded,
  LocalMallRounded,
  AccountBalanceWalletRounded,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
  Chat,
  MenuBookRounded,
  LocalOfferRounded,
  Home,
  PrecisionManufacturingOutlined,
  More,
} from "@mui/icons-material";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
// import LocalMallRoundedIcon from '@mui/icons-material';
import "./App.css";
import { useEffect } from "react";
import Header from "./Components/Header";
import SubMenuContainer from "./Components/SubMenuContainer";
import BannerName from "./Components/BannerName";
import MenuContainer from "./Components/MenuContainer";
import MenuCard from "./Components/MenuCard";
import { MenuItems, Items } from "./Components/Data";
import ItemCard from "./Components/ItemCard";
function App() {
  {
    /* useEffect  tạo vòng lập sử dụng bất cứ khi nào đề xuất */
  }
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menuCard active toggle
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, []);

  return (
    <div className="App">
      {/* Header Section */}
      <Header />
      {/* Main Containner?? */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Hamberger"} discount={"10.000"} link={"#"} />
            <img
              className="deliveryPic"
              src="https://topshare.com.vn/htdocs/images/request/2021/01/15/600117915b00c_hamberger.jpg"
              alt=""
            />
          </div>
          {/* dishContainer */}
          <div className="disContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Món Phổ biến"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dishitemContainer">
              <ItemCard
                imgSrc={
                  "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"
                }
                name={"Hamberger Bò"}
                ratings={"5"}
                price={"10.000"}
              />
              <ItemCard
                imgSrc={
                  "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"
                }
                name={"Hamberger Bò"}
                ratings={"5"}
                price={"10.000"}
              />

              <ItemCard
                imgSrc={
                  "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"
                }
                name={"Hamberger Bò"}
                ratings={"5"}
                price={"10.000"}
              />

              <ItemCard
                imgSrc={
                  "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"
                }
                name={"Hamberger Bò"}
                ratings={"5"}
                price={"10.000"}
              />

              <ItemCard
                imgSrc={
                  "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"
                }
                name={"Hamberger Bò"}
                ratings={"5"}
                price={"10.000"}
              />
            </div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
      {/* Bottom Menu  */}
      <div className="bottomMenu">
        <ul id="menu">
          {/* pre */}
          <MenuContainer link={"#"} icon={<Home />} isHome />
          {/* pre */}
          <MenuContainer link={"#"} icon={<LocalMallRounded />} />
          {/* pre */}
          <MenuContainer link={"#"} icon={<WidgetsRoundedIcon />} />
          {/* pre */}
          <MenuContainer link={"#"} icon={<PersonRounded />} />
          {/* pre */}
          <MenuContainer link={"#"} icon={<MoreHorizRounded />} />
          {/* pre */}
          <MenuContainer link={"#"} icon={<Settings />} />
          {/* pre */}
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
