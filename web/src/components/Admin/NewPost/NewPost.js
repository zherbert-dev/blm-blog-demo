import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PostForm from 'src/components/Admin/PostForm'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: PostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.posts())
    },
  })

  const onSave = (data) => {
    createPost({ variables: { input: data } })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">New Post</h2>
      <div className="mt-8">
        <PostForm save={true} onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPost
