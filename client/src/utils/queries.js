import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      scores {
        _id
        scoreNumber
      }
    }
  }
`;

export const QUERY_SCORES = gql`
  query score {
    scores {
      _id
      scoreNumber
      scorePlayer
    }
  }`;

export const QUERY_SINGLE_SCORE = gql`
  query getSingleScore($scoreId: ID!) {
    thought(scoreId: $scoreId) {
      _id
      scoreNumber
      scorePlayer
      }
    }
  }
`;
