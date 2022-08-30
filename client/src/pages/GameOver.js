import React from 'react';

import { Link } from 'react-router-dom';

const GameOver = () => {
  return (
    <main>
      <h1 id="flexBox">GAME OVER!!!</h1>
      <h2 id="flexBox">Final Score:</h2>
    <div id="flexBox">
  <Link to="/game">
    <button  id="leaderBoardButton" class="btn btn-lg btn-light m-2" >Play Again</button>
  </Link>
  <Link to="/scores">
    <button id="leaderBoardButton" class="btn btn-lg btn-light m-2" >Leaderboard</button>
  </Link>
    <br></br>
    <br></br>
  </div>
  </main>
  )
}

export default GameOver;