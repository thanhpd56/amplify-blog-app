// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const CreateBlog = gql`
  mutation CreateBlog($input: CreateBlogInput!) {
    createBlog(input: $input) {
      id
      name
      posts {
        nextToken
      }
    }
  }
`;
export const UpdateBlog = gql`
  mutation UpdateBlog($input: UpdateBlogInput!) {
    updateBlog(input: $input) {
      id
      name
      posts {
        nextToken
      }
    }
  }
`;
export const DeleteBlog = gql`
  mutation DeleteBlog($input: DeleteBlogInput!) {
    deleteBlog(input: $input) {
      id
      name
      posts {
        nextToken
      }
    }
  }
`;
export const CreatePost = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
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
export const UpdatePost = gql`
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
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
export const DeletePost = gql`
  mutation DeletePost($input: DeletePostInput!) {
    deletePost(input: $input) {
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
export const CreateComment = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      content
      post {
        id
        title
      }
    }
  }
`;
export const UpdateComment = gql`
  mutation UpdateComment($input: UpdateCommentInput!) {
    updateComment(input: $input) {
      id
      content
      post {
        id
        title
      }
    }
  }
`;
export const DeleteComment = gql`
  mutation DeleteComment($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      id
      content
      post {
        id
        title
      }
    }
  }
`;
