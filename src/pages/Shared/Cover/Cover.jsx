import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero min-h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content bg-slate-600 bg-opacity-60">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">
              {title ? title : "Our Menu"}
            </h1>
            <p className="mb-5">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
