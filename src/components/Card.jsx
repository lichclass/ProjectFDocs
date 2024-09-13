import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className='col-sm-4 flex'>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 flex items-center justify-center p-4">
            <img src={props.image} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-lg font-bold">{props.title}</h5>
              <p className="card-text">{props.description}</p>
            </div>
            <div className='px-3 pb-3'>
              <a href={props.link} className="btn btn-primary">View Document</a>
              {props.isNew && <span className="badge bg-success ms-2">New</span>}
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
