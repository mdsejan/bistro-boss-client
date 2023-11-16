import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-4">
      {items.length > 0 ? (
        items?.map((item) => <FoodCard key={item._id} item={item}></FoodCard>)
      ) : (
        <div>
          <h2>No Food Availables</h2>
        </div>
      )}
    </div>
  );
};

export default OrderTab;
