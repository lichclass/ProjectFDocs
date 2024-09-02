import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className="flex border rounded w-72 max-h-max p-4
                    shadow-lg hover:border-blue-700 hover:shadow-xl
                    transform hover:scale-105 transition-transform duration-300
                    cursor-pointer">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center p-4">
          <img src={props.image} className="mx-auto" />
        </div>
        <div className='text-center p-5'>
          <span className="text-2xl font-bold">{props.title}</span>
          <br /><br /><hr />
          <span>{props.description}</span>
        </div>
      </a>
    </div>
  );
}

Card.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

Card.defaultProps = {
    link: "#",
    image: "https://via.placeholder.com/150",
    title: "Card Title",
    description: "Card Description",
}

export default Card;
