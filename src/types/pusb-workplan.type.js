import PropTypes from 'prop-types';

const Workplan = ({ id, thumbnail, public_id, title, description, status }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={thumbnail} alt={title} />
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Public ID:</strong> {public_id}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
};

Workplan.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  public_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Workplan;