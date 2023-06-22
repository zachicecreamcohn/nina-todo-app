import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

import Sidebar from './components/_Sidebar/Sidebar/Sidebar';
import Content from './components/_Content/Content/Content';
import Titlebar from './components/_Titlebar/Titlebar/Titlebar';
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

const [activeCollectionId, setActiveCollectionId] = useState(null);
const [activeDateCategory, setActiveDateCategory] = useState(null); // if not null, will be "today" or "upcoming" 
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
const [collectionsList, setCollectionsList] = useState();

useEffect(() => {
  async function getCollections() {
    const collections = await window.api.invoke("get-collections-list");
    console.log(collections);
    setCollectionsList(collections);
  }

  getCollections();
}, [])



  return (
    <div className="App">
      <Titlebar
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}

        // necessary for appending new collections when they are created
        collectionsList={collectionsList}
        setCollectionsList={setCollectionsList}
      />


      <Sidebar
        collectionsList = {collectionsList}
        activeCollectionId={activeCollectionId}
        setActiveCollectionId={setActiveCollectionId}
        activeDateCategory={activeDateCategory}
        setActiveDateCategory={setActiveDateCategory}
        sidebarCollapsed={sidebarCollapsed}
      />
      <Content
        activeCollectionId={activeCollectionId}
        activeDateCategory={activeDateCategory}
        collectionsList={collectionsList}
        
        />


     
    </div>
  );
}

export default App;
