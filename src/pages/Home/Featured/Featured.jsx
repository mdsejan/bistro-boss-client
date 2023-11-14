import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredimg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        Heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="md:flex">
        <div>
          <img src={featuredimg} alt="" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <h2 className="uppercase">WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>

          <button className="btn bg-transparent px-12 border-b-white hover:border-b-white border-b-4 hover:border-b-4 uppercase text-white">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
