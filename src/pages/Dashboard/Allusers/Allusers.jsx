import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUserCheck } from "react-icons/fa6";
import Swal from "sweetalert2";

const Allusers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/admin/${user}`).then((res) => {
          console.log(res);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Admin Set!",
              text: "User Role has been set Admin.",
              icon: "success",
            });
          }
        });
      }
    });
  };

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
        axiosSecure.delete(`/user/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <div className="flex justify-between users-center max-w-screen-lg mx-auto p-10 bg-white rounded-t-lg">
        <h2 className="text-3xl">
          <b>All Users</b>
        </h2>
        <h2 className="text-3xl">
          <b>Total Users:</b> {users.length}
        </h2>
      </div>

      <div className="overflow-x-auto max-w-screen-lg mx-auto bg-white p-10 rounded-b-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-lg text-white font-bold">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>

                <td>
                  <div className="font-bold">{user.name}</div>
                </td>
                <td>
                  <h3 className="font-semibold text-xl">{user.email}</h3>
                </td>
                <th>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="text-2xl text-[#B91C1C] hover:text-black"
                    >
                      <FaUserCheck />
                    </button>
                  )}
                </th>

                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default Allusers;
