import React from 'react';

export default function Result(props) {
  return (
    <div className="result" key={props.key}>
      <h2>{props.title}</h2>
      <h3 className="author">Author(s): {props.author}</h3>
      <p className="description">Description: {props.desc}</p>
    </div>
  )
}