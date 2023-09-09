// RepoCard.js
import React from "react";
import "./style.css";
function RepoCard({ repo }) {
  const link1 = `https://github.com/${repo.Manager}/${repo.Repo_Name}`;
  const link2 = `https://github.com/${repo.Manager}`;
  const link3 = `https://github.com/topics/${repo.Repo_Name}`;
  return (
    <div className="repo-card">
      <a href={link3} target="_blank">
        <h3>
          <strong>Topic</strong> : {repo.Repo_Name}
        </h3>
      </a>
      <a href={link1} target="_blank">
        <p className="repnam">
          <strong>Repository Name:</strong>
          <p>{repo.Repo_Name}</p>
        </p>
      </a>
      <a href={link2} target="_blank">
        <p className="repman">
          <strong>Manager:</strong>
          <p>{repo.Manager}</p>
        </p>
      </a>
      <a href={link1} target="_blank">
        <p className="repstar">
          <strong>Stars:</strong>
          <p>{repo.Star}</p>
        </p>
      </a>
      <a href={link1} target="_blank">
        <p className="replang">
          <strong>Languages:</strong>
          <p>
            {repo.language_1} {repo.language_2}
          </p>
        </p>
      </a>
    </div>
  );
}

export default RepoCard;
