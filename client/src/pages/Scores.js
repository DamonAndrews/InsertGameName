import React from 'react';

// Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SCORES } from '../utils/queries';

const Scores = () => {

  const { loading, data } = useQuery(QUERY_SCORES, {

  });

  const score = data?.score || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {score.scorePlayer} <br />
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {score.scoreNumber}
        </blockquote>
      </div>
    </div>
  );
};

export default Scores;
