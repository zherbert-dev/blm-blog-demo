import Posts from 'src/components/Posts'

export const QUERY = gql`
  query POSTS {
    allPosts {
      posts {
        id
        title
        body
        createdAt
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ allPosts }) => {
  return <Posts posts={allPosts.posts} />
}
