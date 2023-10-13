import React from "react";
import "./Explore.css";

function Explore() {
  return (
    <div className="explore-container">
      <h3 className="explore-head">Explore</h3>

      <div className="explore-box1">
        <img className="explore-img" src={"https://cdn.pixabay.com/photo/2017/07/26/11/47/magic-2541458_1280.jpg"} alt={""} />
        <p className="explore-title">Advancad Panchang</p>
      </div>
          <div className="explore-box1">
        <img className="explore-img" src={"https://media.istockphoto.com/id/810006098/photo/zodiac-signs-background.webp?b=1&s=612x612&w=0&k=20&c=u85T-_H8vPDWLO9xikzY6oV2bQX4Z_r96fFUMctDH30="} alt={""} />
        <p className="explore-title">Featured Tools</p>
      </div>
          <div className="explore-box1">
        <img className="explore-img" src={"https://cdn.pixabay.com/photo/2015/02/17/08/25/horoscope-639126_640.jpg"} alt={""} />
        <p className="explore-title">Nakshatra & Hora</p>
      </div>
          <div className="explore-box1">
        <img className="explore-img" src={"https://cdn.pixabay.com/photo/2017/07/23/22/36/starry-sky-2533021_1280.jpg"} alt={""} />
        <p className="explore-title">Transit</p>
      </div>
          <div className="explore-box1">
        <img className="explore-img" src={"https://cdn.pixabay.com/photo/2018/08/08/08/27/moon-3591570_1280.jpg"} alt={""} />
        <p className="explore-title">Special Events</p>
      </div>
          <div className="explore-box1">
        <img className="explore-img" src={"https://cdn.pixabay.com/photo/2015/02/19/09/13/horoscope-641919_640.jpg"} alt={""} />
        <p className="explore-title">Tools</p>
      </div>
    </div>
  );
}

export default Explore;
