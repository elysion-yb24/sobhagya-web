import PropTypes from "prop-types";

const ConsultationCard = ({ image, heading, content }) => {
  return (
    <div className=" flex flex-col gap-2 border-2  text-primary rounded-xl hover:shadow-2xl">
      <div className=" flex flex-col items-center justify-center p-2 w-56 md:h-64 max-sm:mb-10">
        <img
          src={image}
          alt="image"
          className="object-contains md:w-20 md:h-20 max-sm:h-32 cursor-pointer p-1"
        />
        <h2 className="text-lg font-semibold mb-3 text-slate-600">{heading}</h2>
        <p className="text-sm max-sm:text-base text-gray-600">{content}</p>
      </div>
      <div className="flex items-center justify-between bg-page_background p-1 rounded-lg"></div>
    </div>
  );
};

export default ConsultationCard;

ConsultationCard.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
};
