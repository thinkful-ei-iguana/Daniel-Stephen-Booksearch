import React from 'react';
import './App.css';
import Search from './Search';
import FilterBar from './FilterBar';

class App extends React.Component {
  state = {
    "search term": "",
    "print filter": null,
    "book type": "all",
    books: []
  }

  handlePrintFilter = (value) => {
    this.setState({ "print filter": value }, () => this.searchBooks())
  }

  handleBookType = (value) => {
    this.setState({ "book type": value }, () => this.searchBooks())
  }

  searchBooks = () => {
    console.log("search ran", this.state["print filter"]);
    let filter = '';
    if (this.state["print filter"]) {
      filter = `&filter=${this.state["print filter"]}`
    }
    const printType = `&printType=${this.state["book type"]}`;
    const terms = this.state["search term"]

    const url = `https://www.googleapis.com/books/v1/volumes?q=${terms}${filter}${printType}`;
    const body = {};

    fetch(url, body)
      .then(res => res.json())
      .then( data => {
        let books;
        if (data.items) {
          books = data.items.map(item => {
          return item.volumeInfo;
        })}
        this.setState({books})
      });
  }

  handleSearchBooks = (e) => {
    e.preventDefault()
    const searchTerm = this.state["search term"];
    this.searchBooks(searchTerm);
  }

  setSearchTerm = (val) => {
    this.setState({"search term": val});
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
              setSearchTerm={this.setSearchTerm}
              searchTerm={this.state["search term"]}
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
