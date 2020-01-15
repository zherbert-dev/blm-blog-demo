import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const PostsList = ({ posts }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      location.reload()
    },
  })

  const onDeleteClick = (event) => {
    const id = event.target.dataset.id

    if (confirm(`Are you sure you want to delete post ${id}?`)) {
      deletePost({ variables: { id: parseInt(id) } })
    }
  }

  return (
    <table className="table-auto w-full zebra text-sm">
      <thead>
        <tr>
          <th className="font-semibold text-gray-600 text-left border-b-4 border-double pb-2">
            id
          </th>
          <th className="font-semibold text-gray-600 text-left border-b-4 border-double pb-2">
            title
          </th>
          <th className="font-semibold text-gray-600 text-left border-b-4 border-double pb-2">
            body
          </th>
          <th className="font-semibold text-gray-600 text-left border-b-4 border-double pb-2">
            createdAt
          </th>
          <th className="font-semibold text-gray-600 text-left border-b-4 border-double pb-2">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="py-2 border-b">{post.id}</td>
            <td className="py-2 border-b">{post.title}</td>
            <td className="py-2 border-b">{post.body.substring(0, 50)}</td>
            <td className="py-2 border-b">{post.postedAt}</td>
            <td className="py-2 border-b">
              <nav>
                <ul>
                  <li className="inline-block">
                    <Link
                      to={routes.post({ id: post.id })}
                      className="text-blue-600 hover:text-blue-800 underline hover:no-underline"
                    >
                      Show
                    </Link>
                  </li>
                  <li className="inline-block ml-2">
                    <Link
                      to={routes.editPost({ id: post.id })}
                      className="text-blue-600 hover:text-blue-800 underline hover:no-underline"
                    >
                      Edit
                    </Link>
                  </li>
                  <li className="inline-block ml-2">
                    <a
                      href="#"
                      data-id={post.id}
                      className="text-red-600 hover:text-red-800 underline hover:no-underline"
                      onClick={onDeleteClick}
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </nav>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PostsList
