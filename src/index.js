import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

import TextExpander from "./TextExpander";

function Test() {
  const [movieRate, setMovieRate] = useState(0);
  return (
    <div>
      <StarRating onSetRating={setMovieRate}></StarRating>
      <p>Movie is rated by {movieRate}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxStar={5}
      size={16}
      color="#fcc"
      messages={["Terrible", "Bad", "Okay", "Decent", "Perfect"]}
      defaultRating={4}
    ></StarRating>
    <Test></Test>*/}
    {/*<TextExpander color={"#2a2"} displayButtonUnder={false}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque enim
      aspernatur quaerat impedit voluptatum obcaecati excepturi modi, iure nobis
      perspiciatis, corrupti sit, quod tempora. Dolorem quam ad pariatur iste
      non?
    </TextExpander>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
