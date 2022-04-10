import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <audio controls src={props.phonetic.audio}>
          Your browser does not support the audio element.
        </audio>
        <br />
        <div className="text">{props.phonetic.text}</div>
      </div>
    );
  } else {
    return null;
  }
}
