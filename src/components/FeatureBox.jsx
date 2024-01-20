import PropTypes from "prop-types";

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="text-white element-center flex-col text-center">
      <img
        src={`/assets/${icon}`}
        alt="Icon-img"
        className="h-[80px] w-[80px] object-contain"
      />
      <h1 className="text-xl font-semibold my-[15px]">{title}</h1>
      <p className="font-normal text-sm">{description}</p>
    </div>
  );
};

FeatureBox.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
};

export default FeatureBox;
