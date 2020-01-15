import Posts from 'src/components/Admin/Posts'

export const QUERY = gql`
  query POSTS {
    allPosts {
      posts {
        id
        title
        body
        postedAt
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ allPosts }) => {
  return <Posts posts={allPosts.posts} />
}
