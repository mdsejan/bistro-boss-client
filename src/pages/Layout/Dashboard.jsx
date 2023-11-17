import { FaCartShopping, FaHouse } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { RiMenuSearchFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 py-10 px-5">
        <ul className="menu gap-4">
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping></FaCartShopping> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <MdReviews /> Add a Review
            </NavLink>
          </li>
        </ul>

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

      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
