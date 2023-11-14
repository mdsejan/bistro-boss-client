const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex">
      <img
        className="w-[100px] mr-6 rounded-ee-full rounded-bl-full rounded-tr-full"
        src={image}
        alt={name}
      />
      <div>
        <h3 className="uppercase">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506]">{price}</p>
    </div>
  );
};

export default MenuItem;
