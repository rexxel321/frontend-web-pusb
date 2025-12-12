import PropTypes from 'prop-types';

export const CNC = ({ id, short_name, full_name, image, category, highlight, description, instagram, status }) => {
  return (
    <div>
      <h2>{short_name} ({full_name})</h2>
      <img src={image} alt={short_name} />
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Highlight: {highlight}</p>
      <a href={instagram}>Instagram</a>
      <p>Status: {status ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

CNC.propTypes = {
  id: PropTypes.string.isRequired,
  short_name: PropTypes.string.isRequired,
  full_name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

const WorkplanCNC = ({ id, cnc_id, title, description, duration, date_parse, status }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Duration: {duration}</p>
      <p>Date: {date_parse}</p>
      <p>Status: {status ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

WorkplanCNC.propTypes = {
  id: PropTypes.number.isRequired,
  cnc_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  date_parse: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

const ModalActivityCnC = ({ openModal, workName, workDescription, workplan, handleModalDescription }) => {
  if (!openModal) return null;

  return (
    <div className="modal">
      <h2>{workName}</h2>
      <p>{workDescription}</p>
      <WorkplanCNC {...workplan} />
      <button onClick={handleModalDescription}>Close</button>
    </div>
  );
};

ModalActivityCnC.propTypes = {
  openModal: PropTypes.bool.isRequired,
  workName: PropTypes.string,
  workDescription: PropTypes.string,
  workplan: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cnc_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    date_parse: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  handleModalDescription: PropTypes.func.isRequired,
};
