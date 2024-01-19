import PropTypes from "prop-types";

const TestimonialBox = ({ name, position, description, image }) => {
  return (
    <div className="text-white bg-[#21293c] rounded p-[25px] shadow-[8px_8px_1px_8px_#1c202c]">
      <p className="mb-[15px] tracking-[0.8px] font-normal text-sm">
        {description}
      </p>
      <div className="flex">
        <img
          src={`src/assets/${image}`}
          alt="person-img"
          className="w-[50px] h-[50px] rounded-full object-contain"
        />
        <div className="ml-[15px]">
          <strong className="block tracking-[0.3px]">{name}</strong>
          <p className="text-sm font-normal tracking-[0.8px]">{position}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialBox.propTypes = {
  name: PropTypes.any.isRequired,
  position: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
  image: PropTypes.any.isRequired,
};

export default TestimonialBox;
