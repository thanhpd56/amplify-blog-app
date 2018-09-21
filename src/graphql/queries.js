// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const GetBlog = gql`
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        nextToken
      }
    }
  }
`;
export const ListBlogs = gql`
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;
export const GetPost = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
`;
export const ListPosts = gql`
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
      }
      nextToken
    }
  }
`;
export const GetComment = gql`
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      post {
        id
        title
      }
    }
  }
`;
export const ListComments = gql`
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
      }
      nextToken
    }
  }
`;
