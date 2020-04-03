import Post from 'src/components/Blog/Post'

export const QUERY = gql`
  query POST($tagName: String) {
    tag(name: $tagName) {
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

export const Success = ({ tag }) => {
  console.info(tag)
  return tag.posts.map((post) => (
    <Post key={post.id} post={post} summary={true} />
  ))
}
