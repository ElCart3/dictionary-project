import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="meaning-position">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div className="ms-5">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <div className="definitions-result">
                  <div className="definition">{definition.definition}</div>
                  <div className="example">{definition.example}</div>
                  <Synonyms synonyms={definition.synonyms} />
                </div>
              </div>
            );
          })}
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    </div>
  );
}
