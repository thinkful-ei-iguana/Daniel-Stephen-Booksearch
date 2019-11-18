import React from 'react';

export default function Search() {
  return (
    <form action="submit">
      <label htmlFor="book-search" className="search-label">Search:</label>
      <input 
        type="text" 
        id="book-search" 
        className="search-input" 
        placeholder="henry"
      />
    </form>
  );
}