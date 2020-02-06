import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MovieCardDesk = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseData: 2014
};

ReactDOM.render(
    <App
      title={MovieCardDesk.title}
      genre={MovieCardDesk.genre}
      releaseData={MovieCardDesk.releaseData}
    />,
    document.querySelector(`#root`)
);

