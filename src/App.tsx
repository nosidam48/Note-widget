import React from 'react';
import './App.css';
import Message from "./Components/Message/message";
import BottomLeft from "./Components/BottomLeft/index";
import BottomRight from "./Components/BottomRight/index";
import TopLeft from "./Components/TopLeft/index";
import TopRight from "./Components/TopRight/index";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Notefun</h1>
      <TopLeft></TopLeft>
      <TopRight></TopRight>
      <BottomLeft></BottomLeft>
      <BottomRight></BottomRight>
      <Message></Message>
    </div>
  );
}

export default App;
