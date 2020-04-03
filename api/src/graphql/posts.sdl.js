export const schema = gql`
  type Post {
    id: Int!
    title: String!
    slug: String!
    body: String!
    author: String!
    image: String
    postedAt: DateTime
    tags: [Tag!]!
  }

  type PostsSet {
    posts: [Post!]!
    count: Int!
  }

  type Query {
    allPosts(page: Int, limit: Int): PostsSet
    findPostById(id: Int): Post
    findPostBySlug(slug: String): Post
    searchPosts(term: String): [Post]
  }

  input PostInput {
    title: String!
    slug: String!
    author: String!
    body: String!
    image: String
    postedAt: DateTime
  }

  type Mutation {
    createPost(input: PostInput!): Post
    updatePost(id: Int!, input: PostInput!): Post
    hidePost(id: Int!): Post
    deletePost(id: Int!): Post
  }
`
