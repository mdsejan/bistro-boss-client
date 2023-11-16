import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertbg from "../../../assets/menu/dessert-bg.jpeg";
import pizzabg from "../../../assets/menu/pizza-bg.jpg";
import saladbg from "../../../assets/menu/salad-bg.jpg";
import soupbg from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg}></Cover>

      {/* offered */}
      <MenuCategory items={offered}></MenuCategory>

      {/*  DESSERTS */}
      <MenuCategory
        items={dessert}
        menutitle="dessert"
        img={dessertbg}
      ></MenuCategory>

      {/* PIZZA */}
      <MenuCategory
        items={pizza}
        menutitle="pizza"
        img={pizzabg}
      ></MenuCategory>

      {/* SALADS */}
      <MenuCategory
        items={salad}
        menutitle="salad"
        img={saladbg}
      ></MenuCategory>

      {/* SALADS */}
      <MenuCategory items={soup} menutitle="soup" img={soupbg}></MenuCategory>
    </div>
  );
};

export default Menu;
