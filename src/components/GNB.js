import React from "react";

import "./GNB.scss";

const Header = () => {

  return (
    <aside className="GNB">
      <div className="GNBWrap">
        <div className="logoIconWrap">
          <div className="logoIcon"></div>
        </div>
        <div className="center">
          <div className="liveIcon"></div>
          <div className="musicIcon"></div>
          <div className="searchIcon"></div>
          <div className="rankIcon"></div>
        </div>
        <div className="right">
          <div className="personIcon"></div>
          <div className="talkIcon"></div>
          <div className="storeIcon">
            <span className="saleStore">SALE</span>
          </div>
          <div className="noticeIcon active"></div>
          <button className="createBtn">만들기</button>
        </div>
      </div>
    </aside>
  );
};
export default Header;
