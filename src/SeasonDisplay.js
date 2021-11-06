import React from "react";

const SeasonDisplay = (props) => {
  const seasonClassName =
    props.season === "winter" ? "heartbeat icon" : "medkit icon";

  const seasonText = props.season === "winter" ? "Winter!" : "Summary ohey!";

  return (
    <div>
      <i className={seasonClassName}></i>
      <h2>{seasonText}</h2>
      <i className={seasonClassName}></i>
    </div>
  );
};

export default SeasonDisplay;
