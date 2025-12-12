import PropTypes from 'prop-types';

const Role = ({
  id,
  parent_id,
  level,
  name,
  status,
  highlight,
  description,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Parent ID:</strong> {parent_id}</p>
      <p><strong>Level:</strong> {level}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Highlight:</strong> {highlight}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};

Role.propTypes = {
  id: PropTypes.string.isRequired,
  parent_id: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Role;

const RoleRequest = ({
    parent_id,
    level,
    name,
    highlight,
    description,
  }) => {
    return (
      <div>
        <h2>{name}</h2>
        <p><strong>Parent ID:</strong> {parent_id}</p>
        <p><strong>Level:</strong> {level}</p>
        <p><strong>Highlight:</strong> {highlight}</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
    );
  };
  
  RoleRequest.propTypes = {
    parent_id: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  
 // export default RoleRequest;
  