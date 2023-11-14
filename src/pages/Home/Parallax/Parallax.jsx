import img1 from "../../../assets/home/chef-service.jpg";

const Parallax = () => {
  return (
    <div
      className="p-20 my-20 bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="bg-white text-black p-20 flex flex-col justify-center items-center text-center">
        <h3 className="text-5xl mb-4">Bistro Boss</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Parallax;
