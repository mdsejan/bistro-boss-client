import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { useContext } from "react";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(ThemeContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut().then();
  };

  return (
    <div className="fixed w-full bg-black bg-opacity-50 text-white z-10 hover:text-gray-300">
      <div className="max-w-screen-2xl mx-auto z-30">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/order">Order</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Bistro</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/order">Order</Link>
              </li>
              {!user ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="hover:bg-transparent text-red-800 hover:text-red-600 font-semibold hover:font-bold"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn bg-black hover:text-black">
              <FaCartShopping className="text-xl text-white" />
              <div className="badge badge-secondary">{cart.length}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
