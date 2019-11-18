import React from 'react';

export default function FilterBar(props) {
  return (
    <div className="filter-bar">
      <form action="#" name="filter">

        <label for="print-filter">Print Type:</label>
        <select id="print-filter">
          <option value="null" selected>All</option>
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
          <option value="full">Full</option>
          <option value="partial">Partial</option>
        </select> 

        <label for="book-type">Book Type:</label>
        <select id="book-type">
          <option value="all" selected>No Filter</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>

      </form>
    </div>
  );
}