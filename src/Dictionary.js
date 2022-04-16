import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001980c07bf5b89462fb22c19c7c07e9ad8";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="text-center mb-4">
        <i className="fas fa-book-open title-icon"></i>
      </div>
      <form className="text-center" onSubmit={search}>
        <input
          type="search"
          autoFocus
          placeholder="Search for a word..."
          onChange={handleKeyword}
        />
      </form>
      <div className="row">
        <div className="col-sm-8">
          <Results results={results} />
        </div>
        <div className="col-sm-4">
          <Photos photos={photos} />
        </div>
      </div>
    </div>
  );
}
