import React from 'react';

export default function Search(props) {
  return (
    <form
      action="submit"
      onSubmit={(e) => props.handleSearchBooks(e)}
    >
      <label htmlFor="book-search" className="search-label">Search:</label>
      <input 
        value={props.searchTerm}
        type="text" 
        id="book-search" 
        className="search-input" 
        placeholder="henry"
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
      <button className="submit-button">Search</button>
    </form>
  );
}