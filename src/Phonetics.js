import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <audio controls src={props.phonetic.audio}>
          Your browser does not support the audio element.
        </audio>
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
