import React from 'react';
import { Link } from 'react-router-dom';


const Game = () => {
  //   const { loading, data } = useQuery(QUERY_SCORES);
  //   const thoughts = data?.scores || [];
  
    return (
      <main>
    <h1>This is where the game will be</h1>
  <Link to="/">
  <button>
    Return To Start Page
  </button>
</Link>
  <Link to="/gameover">
    <button>
      I'm Dead
    </button>
  </Link>

</main>
    );
  };
  
  export default Game;