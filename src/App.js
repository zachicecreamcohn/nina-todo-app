import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

import Sidebar from './components/_Sidebar/Sidebar/Sidebar';
import Content from './components/_Content/Content/Content';
import Titlebar from './components/_Titlebar/Titlebar/Titlebar';
import NewCollection from './components/_Popup/NewCollection/NewCollection';
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
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="App">
      <Titlebar
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />


      <Sidebar
        collectionsList = {collections}
        activeCollectionIndex={activeCollectionIndex}
        setActiveCollectionIndex={setActiveCollectionIndex}
        activeDateCategory={activeDateCategory}
        setActiveDateCategory={setActiveDateCategory}
        sidebarCollapsed={sidebarCollapsed}
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
