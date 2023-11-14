const SectionTitle = ({ Heading, subHeading }) => {
  return (
    <div className="max-w-screen-sm mx-auto text-center my-20">
      <p className="text-xl font-medium mb-4 text-[#D99904]">{subHeading}</p>
      <h3 className="text-5xl font-semibold text-black border-y-4 py-4">
        {Heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
