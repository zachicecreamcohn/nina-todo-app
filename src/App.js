import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

import Menu from './components/_Menu/Menu/Menu';
import Content from './components/_Content/Content/Content';
function App() {

  const collections = [
    {
        text: "Intro to Digital Anthropology",
        color: "#2A9D8F",
    },
    {
        text: "Russell Young",
        color: "#E76F51",
    },
    {
        text: "Meshuggah",
        color: "#E9C46A"
    }
]

const [activeCollectionIndex, setActiveCollectionIndex] = useState(null);
const [activeDateCategory, setActiveDateCategory] = useState(null); // if not null, will be "today" or "upcoming" 


  return (
    <div className="App">


      <Menu
        collectionsList = {collections}
        activeCollectionIndex={activeCollectionIndex}
        setActiveCollectionIndex={setActiveCollectionIndex}
        activeDateCategory={activeDateCategory}
        setActiveDateCategory={setActiveDateCategory}
      />
      <Content
        activeCollectionIndex={activeCollectionIndex}
        activeDateCategory={activeDateCategory}
        collectionsList={collections}
        
        />
     
    </div>
  );
}

export default App;
