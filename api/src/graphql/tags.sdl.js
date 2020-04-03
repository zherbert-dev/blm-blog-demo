export const schema = gql`
  type Tag {
    id: Int!
    name: String
    posts: [Post!]!
  }

  type Query {
    tags: [Tag]
    tag(name: String): Tag
  }
`
