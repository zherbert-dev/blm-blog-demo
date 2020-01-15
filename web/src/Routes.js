import { Router, Route } from '@redwoodjs/router'
import AboutPage from 'src/pages/AboutPage'
import PostsPage from 'src/pages/admin/PostsPage'
import PostPage from 'src/pages/admin/PostPage'
import NewPostPage from 'src/pages/admin/NewPostPage'
import EditPostPage from 'src/pages/admin/EditPostPage'
import ContactPage from 'src/pages/ContactPage'
import HomePage from 'src/pages/HomePage'
import TaggedPostsPage from 'src/pages/TaggedPostsPage'
import SearchPage from 'src/pages/SearchPage'
import NotFoundPage from 'src/pages/NotFoundPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/posts" page={PostsPage} name="posts" />
      <Route path="/posts/{id}" page={PostPage} name="post" />
      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id}/edit" page={EditPostPage} name="editPost" />

      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
