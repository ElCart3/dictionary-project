import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos text-center">
        {props.photos.map(function (photo, index) {
          return (
            <div key={index}>
              <img
                src={photo.src.landscape}
                alt={photo.alt}
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
