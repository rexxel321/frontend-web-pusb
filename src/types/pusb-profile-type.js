import PropTypes from 'prop-types';

const Profile = ({
  id,
  cabinet_name,
  cabinet_logo,
  tagline,
  public_id,
  address,
  vision,
  instagram,
  email,
  podcast,
  twitter,
  youtube,
  linkedin,
  phone_number,
}) => {
  return (
    <div>
      <h2>{cabinet_name}</h2>
      <img src={cabinet_logo} alt={`${cabinet_name} Logo`} />
      <p>{tagline}</p>
      <p><strong>Vision:</strong> {vision}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Contact:</strong> {phone_number}</p>
      <p><strong>Email:</strong> {email}</p>
      <div>
        <a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={podcast} target="_blank" rel="noopener noreferrer">Podcast</a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href={youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
      </div>
    </div>
  );
};

Profile.propTypes = {
  id: PropTypes.string.isRequired,
  cabinet_name: PropTypes.string.isRequired,
  cabinet_logo: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  public_id: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  vision: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  podcast: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
};

export default Profile;
