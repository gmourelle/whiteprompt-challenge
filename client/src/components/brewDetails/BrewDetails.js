import React, { useEffect, useState } from "react";
import { URL } from "../../constants";

import "./index.scss";
const BrewDetails = ({ match, history }) => {
  const [fetching, setFetching] = useState(false);
  const [brew, setBrew] = useState([]);
  const [error, setError] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    setFetching(true);
    fetch(`${URL}${id}`)
      .then(response => response.json())
      .then(data => {
        setBrew(data);
        setFetching(false);
        setError(null);
      })
      .catch(() => {
        setError("There were problems with connection");
        setFetching(false);
      });
  }, [id]);

  if (fetching) {
    return <span className="container">Loading...</span>;
  }

  return (
    <React.Fragment>
      {error || (
        <section className="brew-details-container">
          <img className="img-container" alt="Poster" src={brew.image} />
          <div className="description-container">
            <p className="description">
              <span className="title">{brew.name}</span>
              {brew.description}
            </p>
            <button className="btn-back" onClick={() => history.push("/")}>
              Back to Brews
            </button>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default BrewDetails;
