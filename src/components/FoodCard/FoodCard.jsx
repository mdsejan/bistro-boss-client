import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCard = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        userEmail: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "add to cart successfully",
            showConfirmButton: false,
            timer: 2500,
          });

          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div className="card card-compact bg-base-100 border">
      <figure className="w-full">
        <img src={image} alt={name} className="w-full object-cover" />
      </figure>
      <div className="card-body justify-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-12 mb-8">
          <button
            onClick={handleAddToCard}
            className="btn bg-white hover:bg-black px-12 border-b-[#BB8506] hover:border-b-[#BB8506] border-b-4 hover:border-b-4 uppercase text-[#BB8506]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
