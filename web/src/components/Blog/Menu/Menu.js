import SearchBar from 'src/components/Blog/SearchBar'
import PopularTagsCell from 'src/components/Blog/PopularTagsCell'
import RecentPostsCell from 'src/components/Blog/RecentPostsCell'

//TODO ADD <PopularTagsCell /> Back under RecentPostsCell
const Menu = () => {
  return (
    <aside className="hidden sm:block w-1/3 p-8 mr-4 bg-white rounded-b shadow">
      <SearchBar />
      <nav className="mt-8">
        <RecentPostsCell />

      </nav>
    </aside>
  )
}

export default Menu
