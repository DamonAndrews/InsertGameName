import React from 'react';

const ScoreList = ({ scores = [] }) => {
  if (!scores.length) {
    return <h3>No Scores Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Scores
      </h3>
      <div className="flex-row my-4">
        {scores &&
          scores.map((score) => (
            <div key={score._id} className="col-12 mb-3 pb-3">
            <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {score.userName} scored{' '}
                </h5>
                <p className="card-body">{score.userScore}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ScoreList;
