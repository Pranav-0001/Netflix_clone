
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {Trending,action,romance,Adventure} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={Trending} title="Trending"/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={romance} title="Romance" isSmall/>
      <RowPost url={Adventure} title="Adventure" isSmall/>

    </div>
  );
}

export default App;
