import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopulerMenus = () => {
  const [menu] = useMenu();
  const populer = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const populerMenu = data.filter((item) => item.category === "popular");
  //       setMenu(populerMenu);
  //     });
  // }, []);
  return (
    <section>
      <SectionTitle
        Heading={"From Our Menu"}
        subHeading={"Populer Items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4">
        {populer?.slice(0, 6)?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="text-center my-12">
        <button className="btn bg-white px-12 border-b-black hover:border-b-black border-b-4 hover:border-b-4 uppercase">
          View All Menu
        </button>
      </div>
    </section>
  );
};

export default PopulerMenus;
