import React from 'react';
import Result from './Result'

export default function ResultsList(props) {
  let results = props.books.map((result, index) => {
    const key = index;
    const title = result.title;
    const desc = result.description;
    const author = result.authors.join(", ")
    return (
      <div className='results-list'>
        <Result
        key={key}
        title={title}
        desc={desc}
        author={author}/>
      </div>
    )
  })

  return (
    <div className="results-list">
      {results}
    </div>
  )
}