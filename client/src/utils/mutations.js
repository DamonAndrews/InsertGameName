import { gql } from '@apollo/client';

export const LOGIN = gql`
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
  mutation addScore($userScore: Integer!, userName: String!) {
    addScore(userScore: $userScore, userName: $userName) {
      _id
      userScore
<<<<<<< HEAD
     player {
      _id
      scores
=======
      userName
>>>>>>> 1e6856d35f99a7b22871d1e5f2d392285272106e
     }
      }
    }
  }`
