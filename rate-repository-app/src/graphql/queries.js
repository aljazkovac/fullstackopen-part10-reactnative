import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchQuery: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchQuery) {
      edges {
        node {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_USER = gql`
    query($includeReviews: Boolean = false) {
        me {
            id
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        repositoryId
                        user {
                            id
                            username
                        }
                        repository {
                            id
                            fullName
                            url
                        }
                    }
                }
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
    query($id: ID!) {
        repository(id: $id) {
            id
            name
            ownerName
            createdAt
            fullName
            reviewCount
            ratingAverage
            forksCount
            stargazersCount
            description
            language
            ownerAvatarUrl
            url
        }
    }
`;

export const GET_REVIEWS = gql`
    query($id: ID!, $first: Int, $after: String) {
        repository(id: $id) {
            id
            fullName
            reviews(first: $first, after: $after) {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`;
