// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const OnCreateBlog = gql`
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        nextToken
      }
    }
  }
`;
export const OnUpdateBlog = gql`
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        nextToken
      }
    }
  }
`;
export const OnDeleteBlog = gql`
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        nextToken
      }
    }
  }
`;
export const OnCreatePost = gql`
  subscription OnCreatePost {
    onCreatePost {
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
export const OnUpdatePost = gql`
  subscription OnUpdatePost {
    onUpdatePost {
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
export const OnDeletePost = gql`
  subscription OnDeletePost {
    onDeletePost {
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
export const OnCreateComment = gql`
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      post {
        id
        title
      }
    }
  }
`;
export const OnUpdateComment = gql`
  subscription OnUpdateComment {
    onUpdateComment {
      id
      content
      post {
        id
        title
      }
    }
  }
`;
export const OnDeleteComment = gql`
  subscription OnDeleteComment {
    onDeleteComment {
      id
      content
      post {
        id
        title
      }
    }
  }
`;
