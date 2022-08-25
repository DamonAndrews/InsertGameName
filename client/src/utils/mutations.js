import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SCORE = gql`
  mutation addScore($scoreNumber: Integer!, scorePlayer: String!) {
    addScore(scoreNumber: $scoreNumber, scorePlayer: $scorePlayer) {
      _id
      scoreNumber
     player {
      _id
      scores
     }
      }
    }
  }`
