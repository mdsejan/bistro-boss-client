import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // const formatDate = (dateString) => {
  //   const dateTime = new Date(dateString);
  //   return dateTime.toISOString().split("T")[0];
  // };

  const formatDate = (dateString) => {
    const dateTime = new Date(dateString);
    const day = dateTime.getDate().toString().padStart(2, "0");
    const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
    const year = dateTime.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const { data: Payments } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <>
      <div className="flex justify-between items-center max-w-screen-lg mx-auto p-10 bg-white rounded-t-lg">
        <h2 className="text-3xl">
          <b>Total Payments:</b> {Payments?.length}
        </h2>
      </div>
      <div className="overflow-x-auto max-w-screen-lg mx-auto bg-white p-10 rounded-b-lg">
        {Payments?.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-lg text-white font-bold">
              <tr>
                <th>#</th>
                <th>Transaction Id</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {Payments?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <h3 className="text-xl">{item.transactionId}</h3>
                  </td>
                  <td>
                    <div className="text-xl">{formatDate(item.date)}</div>
                  </td>
                  <td>
                    <h3 className="font-semibold text-xl">$ {item.price}</h3>
                  </td>
                  <td>
                    <div className="badge badge-neutral py-3 px-4">
                      {item.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-xl font-semibold text-red-600">
            No Payment History Availables
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentHistory;
