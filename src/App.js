import './App.css';
import React, { useEffect, useState } from 'react';
import List from './components/List';
import Details from './components/Details';

export default function App() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_DATA_URL)
    .then((response) => response.json())
    .then((data) => setList(data))
  }, []);

  const handleClickItem = (data) => () =>{
    setSelected(data);
  }

  return (
    <div className="main-page">
      <List list={list} getInformation={handleClickItem}/>
      <Details selected={selected}/>
    </div>
  );
}

