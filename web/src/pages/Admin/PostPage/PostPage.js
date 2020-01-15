import AdminLayout from 'src/layouts/AdminLayout'

import PostCell from 'src/components/Admin/PostCell'

const PostPage = ({ id }) => {
  return (
    <AdminLayout>
      <PostCell id={id} />
    </AdminLayout>
  )
}

export default PostPage
