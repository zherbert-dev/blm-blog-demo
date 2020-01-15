import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const Post = ({ post }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      location.href = routes.posts()
    },
  })

  const onDeleteClick = (event) => {
    const id = event.target.dataset.id
    console.info(routes.posts())
    if (confirm(`Are you sure you want to delete post ${id}?`)) {
      deletePost({ variables: { id: parseInt(id) } })
    }
  }

  return (
    <div>
      <table className="text-sm">
        <tbody>
          <tr>
            <td className="font-semibold p-2 text-right">id</td>
            <td className="p-2">{post.id}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 text-right">title</td>
            <td className="p-2">{post.title}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 text-right">body</td>
            <td className="p-2">{post.body}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 text-right">postedAt</td>
            <td className="p-2">{post.createdAt}</td>
          </tr>
        </tbody>
      </table>
      <nav className="mt-4">
        <ul>
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
    </div>
  )
}

export default Post
