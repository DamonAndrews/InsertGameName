import React from 'react';
// import { useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';

// import { QUERY_SCORES } from `../../utils/queries`;

const Scores = () => {
  
  // const { loading, data } = useQuery(QUERY_SCORES);
  // const scores = data?.scores || [];

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <main>
    <h1>Top High Scores:</h1>
      {/* <div className="flex-row my-4">
        {scores &&
         scores.map((score) => (
          <div key={scores._id} className="col-12 mb-3 pb-3">
            <div className="p-3 bg-dark text-light">
                <h2 className="card-header">
                  {scores.userName} scored{' '}
                </h2>
                <p className="card-body">{scores.userScore}</p>
            </div>
          </div>
          ))}
      </div> */}
  <Link to="/">
    <button>Return to Start</button>
  </Link>

  </main>
  );
};

export default Scores;
