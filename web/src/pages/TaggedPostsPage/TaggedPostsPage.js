import BlogLayout from 'src/layouts/BlogLayout'
import { useParams } from '@redwoodjs/router'
import TaggedPostsCell from 'src/components/Blog/TaggedPostsCell'

const TaggedPostsPage = ({ tagName }) => {
  return (
    <BlogLayout>
      <TaggedPostsCell tagName={tagName} />
    </BlogLayout>
  )
}

export default TaggedPostsPage
