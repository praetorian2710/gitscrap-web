// App.js
import React, { useState, useEffect } from "react";
import RepoCard from "./RepoCard";
import "./App.css";
function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("../scrap/topic.json") // Adjust the path to your JSON file
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="App">
      <h1>GITHUB Repositories</h1>
      <div className="repo-container">
        {repos.map((repo, index) => (
          <RepoCard key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default App;
