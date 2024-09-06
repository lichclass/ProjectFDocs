import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className='col-lg mb-3 '>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={props.image} className='card-img p-4' alt='...' />
          </div>
          <div className='col-md-8 d-flex align-self-center'>
            <div className='card-body'>
              <h5 className='card-title font-bold text-xl'>{props.title}</h5>
              <p className='card-text'>{props.description}</p>
              <br />
              <a href={props.link} className='btn btn-primary hover:scale-110'>Go to Document</a>
              {props.isNew && <span className='text-red-600 badge badge-pill badge-danger ml-2'>New!</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isNew: PropTypes.bool,
}

Card.defaultProps = {
    link: "#",
    image: "https://via.placeholder.com/150",
    title: "Card Title",
    description: "Card Description",
    isNew: false,
}

export default Card;
