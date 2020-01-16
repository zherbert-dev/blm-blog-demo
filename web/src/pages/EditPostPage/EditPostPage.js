import { Link, routes } from '@redwoodjs/router'

import EditPostCell from 'src/components/EditPostCell'

const EditPostPage = ({ id }) => {
  return (
    <div className="bg-gray-100 h-screen font-sans">
      <header className="flex justify-between py-4 px-8">
        <h1 className="text-xl font-semibold">
          <Link
            to={routes.posts()}
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            Posts
          </Link>
        </h1>
        <nav>
          <Link
            to={routes.newPost()}
            className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-2 uppercase tracking-wide rounded"
          >
            + New Post
          </Link>
        </nav>
      </header>
      <main className="mx-4">
        <EditPostCell id={parseInt(id)} />
      </main>
    </div>
  )
}

export default EditPostPage
