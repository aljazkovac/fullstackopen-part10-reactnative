import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
    mutation Authenticate($username: String!, $password: String!) {
        authenticate(credentials: { username: $username, password: $password }) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput!) {
        createReview(review: $review) {
            id
            repositoryId
            userId
            rating
            createdAt
            text
            repository {
                id
                fullName
            }
            user {
                id
                username
            }
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($user: CreateUserInput!) {
        createUser(user: $user) {
            id
            username
        }
    }
`;