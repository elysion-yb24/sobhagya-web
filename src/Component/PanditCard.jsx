import PropTypes from "prop-types";

const PanditCard = ({ image, name, title }) => {
  return (
    <div className="cursor-pointer bg-gradient-to-r from-page_background to-lightYellow shadow-2xl rounded-xl">
      <div className=" flex flex-col justify-center items-center gap-2  p-4 w-56 md:h-[19rem]  border-4 rounded-xl  hover:bg-hoverBackground border-white  text-primary">
        <div className=" rounded-full border-1 w-[10rem] border-page_background bg-white mb-9">
          <img
            src={image}
            alt="image"
            className="object-contains aspect-auto "
          />
        </div>
        <h2 className="text-lg font-semibold mb-3">{name}</h2>
        <p className="text-md max-sm:text-base">{title}</p>
      </div>
    </div>
  );
};

export default PanditCard;
PanditCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
