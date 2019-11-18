import React from 'react';

export default function FilterBar(props) {
  return (
    <div className="filter-bar">
      <form action="#" name="filter">

        <label htmlFor="print-filter">Print Type:</label>
        <select 
          id="print-filter" 
          onChange={(e) => props.handlePrintFilter(e.target.value)}
          defaultValue={null}
        >
          <option value="null">All</option>
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
          <option value="full">Full</option>
          <option value="partial">Partial</option>
        </select> 

        <label htmlFor="book-type">Book Type:</label>
        <select 
          id="book-type" 
          onChange={ (e) => props.handleBookType(e.target.value)}
          defaultValue="all"
        >
          <option value="all">No Filter</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>

      </form>
    </div>
  );
}