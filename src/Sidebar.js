import React, { useState } from "react";
import menu_icon from "./assests/menu_icon.png";
import plus_icon from "./assests/plus_icon.png";
import message_icon from "./assests/message_icon.png";
import question_icon from "./assests/question_icon.png";
import history_icon from "./assests/history_icon.png";
import setting_icon from "./assests/setting_icon.png";

const Sidebar = () => {
  const [extented, setExtended] = useState(false);

  return (
    <div className="Sidebar">
      <div className="upperside">
        <img onClick={() => setExtended(prev=>!prev)} src={menu_icon} alt="" className="menu" />
        <div className="newchat">
          {extented ? (
            <button className="addBtn" >
              <img src={plus_icon} alt="" /> New chat
            </button>
          ) : (
            <img src={plus_icon} alt="" />
          )}
        </div>
        {extented ? (
          <div className="uppersideBottom">
            <p className="recent-title">Recent</p>
            <button className="query">
              <img src={message_icon} alt="" /> What is Programming?
            </button>
            <button className="query">
              <img src={message_icon} alt="" /> What is Programming?
            </button>
          </div>
        ) : null}
      </div>
      <div className="lowerside">
        <div className="lowerside-item query">
          {extented ? (
            <button>
              {" "}
              <img src={question_icon} alt="" /> help{" "}
            </button>
          ) : (
            <img src={question_icon} alt=""  /> 
          )}
        </div>
        <div className="lowerside-item query">
          {extented ? (
            <button>
              {" "}
              <img src={history_icon} alt="" /> Activity{" "}
            </button>
          ) : <img src={history_icon} alt="" />}
        </div>
        <div className="lowerside-item query">
          {extented ? (
            <button>
              {" "}
              <img src={setting_icon} alt="" /> Settings{" "}
            </button>
          ) : <img src={setting_icon} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
