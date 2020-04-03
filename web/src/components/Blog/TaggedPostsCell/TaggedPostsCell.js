import Post from 'src/components/Blog/Post'

export const QUERY = gql`
  query POST($tag: String) {
    tagWithPosts: tag(name: $tag) {
      id
      name
      posts {
        id
        title
        slug
        author
        body
        image
        postedAt
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ tagWithPosts }) => {
  console.info(tagWithPosts)
  return tagWithPosts.posts.map((post) => (
    <Post key={post.id} post={post} summary={true} />
  ))
}
