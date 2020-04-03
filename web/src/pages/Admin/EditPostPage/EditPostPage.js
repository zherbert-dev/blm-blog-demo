import AdminLayout from 'src/layouts/AdminLayout'
import EditPostCell from 'src/components/Admin/EditPostCell'

const EditPostPage = ({ id }) => {
  return (
    <AdminLayout>
      <EditPostCell id={id} />
    </AdminLayout>
  )
}

export default EditPostPage
