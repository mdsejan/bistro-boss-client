const FoodCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="card card-compact bg-base-100 border">
      <figure className="w-full">
        <img src={image} alt={name} className="w-full object-cover" />
      </figure>
      <div className="card-body justify-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-12 mb-8">
          <button className="btn bg-white hover:bg-black px-12 border-b-[#BB8506] hover:border-b-[#BB8506] border-b-4 hover:border-b-4 uppercase text-[#BB8506]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
