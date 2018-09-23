import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="user-profile">
      <img src={props.imageUrl} />
      <div className="details">
        <h1>{props.name}</h1>
        <a href={'http://twitter.com/' + props.twitter}>@{props.twitter_url}</a>
        <p>Works on <strong>{props.email}</strong></p>
        <h3>Github Repos:</h3>
        <ul className="repos">

        </ul>
      </div>
    </div>
  );
}
