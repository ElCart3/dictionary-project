import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <audio className="audio" src={props.phonetic.audio}></audio>
        <span
          className="btn"
          onClick={function () {
            const audio = document.getElementsByClassName("audio")[0];
            audio.play();
          }}
        >
          <i className="fa-solid fa-play"></i>
        </span>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
