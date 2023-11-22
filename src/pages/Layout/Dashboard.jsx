import { FaCartShopping, FaGear, FaHouse, FaUsers } from "react-icons/fa6";
import {
  MdAddToPhotos,
  MdOutlineLogout,
  MdPayment,
  MdReviews,
} from "react-icons/md";
import { RiMenuSearchFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const Dashboard = () => {
  const [cart] = useCart();
  const { logOut } = useContext(ThemeContext);
  // ToDo: Get isadmin value from the database
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut().then();
  };
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 py-10 px-5">
        <ul className="menu gap-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHouse /> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <MdAddToPhotos /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaGear /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHouse /> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartShopping></FaCartShopping> My Cart ( {cart.length} )
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <MdPayment /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">
                  <MdReviews /> Add a Review
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Shared Navlinks */}
        <div className="divider my-10">Main Site</div>

        <ul className="menu">
          <li>
            <NavLink to="/">
              <FaHouse /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <RiMenuSearchFill /> Menu
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>
              <MdOutlineLogout /> Logout
            </button>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-10 bg-gray-100">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
