import Post from 'src/components/Admin/Post'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: ID!) {
    post: findPostById(id: $id) {
      id
      title
      body
      postedAt
    }
  }
`

export const beforeQuery = ({ id }) => {
  return { variables: { id } }
}

export const Loading = () => <div>Loading...</div>

export const Success = ({ post }) => {
  return <Post post={post} />
}
