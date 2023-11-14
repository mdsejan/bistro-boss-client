import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, menutitle, img }) => {
  return (
    <div>
      {menutitle && <Cover img={img} title={menutitle}></Cover>}
      <div className="max-w-screen-2xl mx-auto py-20 w-full">
        <div className="grid md:grid-cols-2 gap-4 w-full">
          {items?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
      <div className="text-center my-12">
        <button className="btn bg-white px-12 border-b-black hover:border-b-black border-b-4 hover:border-b-4 uppercase">
          View All Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
