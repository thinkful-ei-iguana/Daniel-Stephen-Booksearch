import React from 'react';
import './App.css';
import Search from './Search';
import FilterBar from './FilterBar';

class App extends React.Component {
  state = {
    "print filter": null,
    "book type": "all",
  }

  handlePrintFilter = (value) => {
    this.setState({ "print filter": value })
  }

  handleBookType = (value) => {
    this.setState({ "book type": value })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
          <main>
            <Search />
            <FilterBar />
          </main>  
      </div>
  );
  }
}

export default App;
