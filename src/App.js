import React from 'react';
import './App.css';
import Search from './Search';
import FilterBar from './FilterBar';

class App extends React.Component {
  state = {
    "print filter": null,
    "book type": "all",
    books: []
  }

  handlePrintFilter = (value) => {
    this.setState({ "print filter": value })
  }

  handleBookType = (value) => {
    this.setState({ "book type": value })
  }

  searchBooks = (terms) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${terms}`;
    const body = {};

    fetch(url, body)
      .then(res => res.json())
      .then( data => {
        const books = data.items.map(item => {
          return item.volumeInfo;
        })
        this.setState({books})
      });
  }

  handleSearchBooks = (value) => {
    this.searchBooks(value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
          <main>
            <Search
              handleSearchBooks={this.handleSearchBooks}  
            />
            <FilterBar 
              handleBookType={this.handleBookType}
              handlePrintFilter={this.handlePrintFilter}
            />
          </main>  
      </div>
  );
  }
}

export default App;
