import React from "react";
import compass from "./assests/compass_icon.png";
import bulb_icon from "./assests/bulb_icon.png";
import message_icon from "./assests/message_icon.png";
import code_icon from "./assests/code_icon.png";
import gallery_icon from "./assests/gallery_icon.png";
import mic_icon from "./assests/mic_icon.png";
import send_icon from "./assests/send_icon.png";
import profile_pic from "./assests/profile_pic.png";

const Main = () => {
  return (
    <div className="Main2">
      <div className="nav">
        <p className="mode">mode</p>
        <img src={profile_pic} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, kabwe</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see in zambia</p>
            <img src={compass} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize the concept of urban internet connection </p>
            <img src={bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>why is real madrid the best football club?</p>
            <img src={message_icon} alt="" />
          </div>
          <div className="card">
            <p>How to improve my coding?</p>
            <img src={code_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="main-bottom">
        <div className="search">
          <input type="text" placeholder="Enter a prompt here" />
          <div>
            <img src={gallery_icon} alt="" />
            <img src={mic_icon} alt="" />
            <img src={send_icon} alt="" />
          </div>
        </div>
        <p className="bottom-info">
            true assistant AI may display inaccurate info, including about
            people, please double-check its responses. Your privacy and True
            Assistant Apps
          </p>
      </div>
    </div>
  );
};

export default Main;
