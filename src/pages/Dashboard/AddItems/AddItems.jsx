import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const imgbb_key = import.meta.env.VITE_IMGBB_KEY;
const imgbb_api = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imgbb_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show sucsess
        toast.success("menu added successfully");
      }
    }
    console.log("with img url", res.data);
  };
  return (
    <div className="max-w-screen-lg mx-auto p-10 bg-white rounded-lg">
      <div>
        <h2 className="text-3xl">
          <b>Add Items</b>
        </h2>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Item Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Category
              </label>
              <select
                {...register("category", { required: true })}
                className=" border border-gray-300 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full p-2.5"
              >
                <option value="">Choose a category</option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
              </select>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
              />
            </div>

            <div className="w-full px-4">
              <label className="block text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Recipe Details
              </label>

              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("recipe", { required: true })}
                maxLength={300}
                rows="6"
                placeholder="Recipe Details"
              ></textarea>
            </div>
            <div className="w-full px-4 mt-10">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input  w-full max-w-xs"
              />
            </div>

            <div className="flex justify-center w-full px-4 mt-16 mb-12 md:mb-0">
              <button
                className="bg-[#FA9046] hover:bg-[#FA9046] text-white font-bold w-2/3 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
