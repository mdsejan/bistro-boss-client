import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Cart food has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <div className="flex justify-between items-center max-w-screen-lg mx-auto p-10 bg-white rounded-t-lg">
        <h2 className="text-3xl">
          <b>Items:</b> {cart.length}
        </h2>
        <h2 className="text-3xl">
          <b>Price:</b> {totalPrice}
        </h2>
        <button className="btn px-12 bg-[#D1A054] hover:bg-black text-white">
          Pay
        </button>
      </div>

      <div className="overflow-x-auto max-w-screen-lg mx-auto bg-white p-10 rounded-b-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-lg text-white font-bold">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div>
                    <div className="w-20 h-20 rounded">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.name}</div>
                </td>
                <td>
                  <h3 className="font-semibold text-xl">$ {item.price}</h3>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-2xl text-[#B91C1C] hover:text-black"
                  >
                    <FaTrash />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
