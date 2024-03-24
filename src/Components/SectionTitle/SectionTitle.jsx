import PropTypes from "prop-types"

const SectionTitle = ({title,description}) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="font-manrope text-[#1A1919] text-5xl font-bold mb-4">
          {title}
        </h2>
        <p className="font-manrope text-[#757575] text-base font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

SectionTitle.propTypes={
    title:PropTypes.string,
    description:PropTypes.string,
}
export default SectionTitle;
