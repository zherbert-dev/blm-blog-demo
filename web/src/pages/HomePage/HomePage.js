import BlogLayout from 'src/layouts/BlogLayout'
import PostSummariesCell from 'src/components/Blog/PostSummariesCell'

const POSTS_PER_PAGE = 5

const HomePage = ({ page }) => {
  return (
    <BlogLayout>
      <PostSummariesCell page={page || 1} perPage={POSTS_PER_PAGE} />
    </BlogLayout>
  )
}

export default HomePage
