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
    <table className="table-auto w-full text-sm">
      <thead>
        <tr>
          <th className="font-semibold text-left border-b-4 border-double pb-2">
            id
          </th>
          <th className="font-semibold text-left border-b-4 border-double pb-2">
            title
          </th>
          <th className="font-semibold text-left border-b-4 border-double pb-2">
            body
          </th>
          <th className="font-semibold text-left border-b-4 border-double pb-2">
            createdAt
          </th>
          <th className="font-semibold text-left border-b-4 border-double pb-2">
            &nbsp;
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
            <td className="py-2 border-b text-right">
              <nav>
                <ul>
                  <li className="inline-block">
                    <Link
                      to={routes.post({ id: post.id })}
                      className="text-xs bg-blue-600 text-white hover:bg-blue-800 rounded px-2 py-1 uppercase font-semibold tracking-wide"
                    >
                      Show
                    </Link>
                  </li>
                  <li className="inline-block ml-2">
                    <Link
                      to={routes.editPost({ id: post.id })}
                      className="text-xs bg-blue-600 text-white hover:bg-blue-800 rounded px-2 py-1 uppercase font-semibold tracking-wide"
                    >
                      Edit
                    </Link>
                  </li>
                  <li className="inline-block ml-2">
                    <a
                      href="#"
                      data-id={post.id}
                      className="text-xs bg-red-600 text-white hover:bg-red-800 rounded px-2 py-1 uppercase font-semibold tracking-wide"
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
