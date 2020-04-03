export const schema = gql`
  type Tag {
    id: ID!
    name: String
    posts: [Post!]!
  }

  type Query {
    tags: [Tag]
    tag(name: String): Tag
  }
`
