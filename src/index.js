import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameComponent from "./Components/GameComponent";

ReactDOM
  .render(
    <GameComponent/>,
    document
      .getElementById(
        'root'
      )
  )
;