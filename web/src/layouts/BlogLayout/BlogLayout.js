import Menu from 'src/components/Blog/Menu'
import { Link, NavLink, routes, usePageLoadingContext } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import logo from './logo.png'
import Spinner from './spinner.svg'
import FbLogo from '../../../public/images/fb-logo-trans.png'
import TwitterLogo from '../../../public/images/twitter-logo-trans.png'


const BlogLayout = (props) => {
  const { authenticated, logIn, logOut } = useAuth()

  const { loading } = usePageLoadingContext()

  const doAuth = () => (authenticated ? logOut() : logIn())

  return (
    <div className="max-w-8xl mx-auto">
      {loading && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black opacity-25 flex">
          <Spinner className="w-32 h-32 bg-white p-8 rounded-md relative m-auto" />
        </div>
      )}
      <div className="sm:mx-8">
        <header className="md:flex flex-wrap items-center border-b-4 border-purple-600 bg-black text-white px-8 py-6 ">
          <div className="flex flex-1">
            <div className="flex-grow mt-1 text-center md:text-left">
              <Link to={routes.home()}>
                <img
                  className="w-56 inline-block"
                  src={logo}
                  alt="BLM Logo"
                />
              </Link>
            </div>
            <div>
          <Link to='https://facebook.com'>
              <img
                className="w-56 inline-block"
                src={FbLogo}
                alt="Facebook Page"
              />
            </Link>
          </div>
          <div>
          <Link to=''>
            <img
              className="w-56 inline-block"
              src={TwitterLogo}
              alt="Hammer Review Logo"
            />
          </Link>
          </div>
          </div>

          <nav className="flex-grow sm:flex-grow-0 min-h-screenmt-4 mt-4 md:mt-0">
            <ul className="flex justify-center">
              <li className="mx-4 font-semibold uppercase">
                <NavLink
                  to={routes.home()}
                  className="text-purple-600 hover:text-indigo-800"
                  activeClassName="bg-white text-indigo-600 px-2 py-1 rounded"
                >
                  Home
                </NavLink>
              </li>
              <li className="mx-4 font-semibold uppercase">
                <NavLink
                  to={routes.about()}
                  className="text-purple-600 hover:text-indigo-800"
                  activeClassName="bg-white text-indigo-600 px-2 py-1 rounded"
                >
                  About
                </NavLink>
              </li>
              <li className="mx-4 font-semibold uppercase">
                <NavLink
                  to={routes.events()}
                  className="text-purple-600 hover:text-indigo-800"
                  activeClassName="bg-white text-indigo-600 px-2 py-1 rounded"
                >
                  Events
                </NavLink>
              </li>
              <li className="mx-4 font-semibold uppercase">
                <NavLink
                  to={routes.contact()}
                  className="text-purple-600 hover:text-indigo-800"
                  activeClassName="bg-white text-indigo-600 px-2 py-1 rounded"
                >
                  Contact
                </NavLink>
              </li>
              {authenticated && (
                <li className="mx-4 font-semibold uppercase">
                  <NavLink
                    to={routes.admin()}
                    className="text-white hover:text-indigo-800"
                    activeClassName="bg-white text-purple-600 px-2 py-1 rounded"
                  >
                    Admin
                  </NavLink>
                </li>
              )}
              <li className="mx-4 font-semibold uppercase">
                <a
                  onClick={doAuth}
                  className="cursor-pointer text-purple-600 hover:text-indigo-800"
                >
                  {authenticated ? 'Logout' : 'Login'}
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex items-start">
          <Menu />
          <section className="flex-1 pt-4 pb-8 px-8 bg-white shadow">
            {props.children}
          </section>
        </main>
        <footer className="bg-indigo-600 text-indigo-200 text-sm text-center py-4">
          Copyright ©2019 Harrisonburg BLM Movement
        </footer>
      </div>
    </div>
  )
}

export default BlogLayout
