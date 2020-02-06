import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const movieCardDesk = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseData: 2014
};

ReactDOM.render(
    <App
      title={movieCardDesk.title}
      genre={movieCardDesk.genre}
      releaseData={movieCardDesk.releaseDate}
    />,
    document.querySelector(`#root`)
);

