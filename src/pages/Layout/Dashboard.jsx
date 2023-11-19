import { FaCartShopping, FaHouse } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { RiMenuSearchFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // ToDo: Get isadmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 py-10 px-5">
        <ul className="menu gap-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHouse /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaHouse /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaHouse /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaHouse /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartShopping></FaCartShopping> My Cart ( {cart.length} )
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add review">
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
            <NavLink to="/">
              <RiMenuSearchFill /> Menu
            </NavLink>
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
