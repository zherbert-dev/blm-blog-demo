import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/posts/{id}/edit" page={EditPostPage} name="editPost" />
      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id}" page={PostPage} name="post" />
      <Route path="/posts" page={PostsPage} name="posts" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
