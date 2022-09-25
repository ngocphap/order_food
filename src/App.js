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
              <div>
                <MenuCard 
                imgSrc={"http://hoanggiabakery.vn/wp-content/uploads/2019/06/Hamberger-b%C3%B2-khoai-t%C3%A2y-chi%C3%AAn-247x300.jpg"}
                name={"Hamberger"}/>
              </div>
              <div>
                <MenuCard 
                imgSrc={"http://hoanggiabakery.vn/wp-content/uploads/2019/06/Hamberger-b%C3%B2-khoai-t%C3%A2y-chi%C3%AAn-247x300.jpg"}
                name={"Hamberger"}/>
              </div>
              <div>
                <MenuCard 
                imgSrc={"http://hoanggiabakery.vn/wp-content/uploads/2019/06/Hamberger-b%C3%B2-khoai-t%C3%A2y-chi%C3%AAn-247x300.jpg"}
                name={"Hamberger"}/>
              </div>
            </div>

            <div className="dishitemContainer"></div>
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
