import React from 'react';
import './App.css';
import Search from './Search';
import FilterBar from './FilterBar';

function App() {
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

export default App;
