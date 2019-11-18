import React from 'react';

export default function Search(props) {
  return (
    <form
      action="submit"
      onSubmit={(e) => {
        e.preventDefault()
        props.handleSearchBooks(e.target.value)
        }}
    >
      <label htmlFor="book-search" className="search-label">Search:</label>
      <input 
        type="text" 
        id="book-search" 
        className="search-input" 
        placeholder="henry"
      />
      <button className="submit-button">Search</button>
    </form>
  );
}