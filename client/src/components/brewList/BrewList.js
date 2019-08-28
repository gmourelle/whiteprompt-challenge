import React, { useEffect, useState } from "react";
import Brew from "./Brew";
import { URL } from "../../constants";

import "./index.scss";

const BrewList = () => {
  const [fetching, setFetching] = useState(false);
  const [brews, setBrews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFetching(true);

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setBrews(data);
        setFetching(false);
        setError(null);
      })
      .catch(() => {
        setError("There were problems with connection");
        setFetching(false);
      });
  }, []);

  if (fetching) {
    return <span className="container">Loading...</span>;
  }

  return (
    <main className="container">
      {error || brews.map(brew => <Brew key={brew.id} brew={brew} />)}
    </main>
  );
};

export default BrewList;
