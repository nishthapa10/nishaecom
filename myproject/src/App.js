import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/index';
import Body from './components/Body/index';
import Filters from './components/Filters/index';
import Cards from './components/Cards/index';
function App() {
  let filters = [
    { text: 'size', value: 'size' },
    { text: 'color', value: 'color' },
    { text: 'fit', value: 'fit' },
    { text: 'price', value: 'price' },
    { text: 'sort', value: 'sort' },
  ];
  return (
    <div>
      <Header />
      <Body />
      <Filters filters={filters} />
      <Cards />
    </div>
  );
}

export default App;
