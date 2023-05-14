import './App.css';
import Nav from './components/Nav';
import Insert from './components/Insert';
import { useState } from 'react';
import BaseColaboradores from './data/Data';

function App() {


const [search, setSearch] = useState(BaseColaboradores)

const handleSearch = (value) => {
  setSearch(value)
  console.log(value)
}

  return (
    <div>
      <Nav onSearch={handleSearch}/>
      <Insert />
    </div>
  );
}

export default App;
