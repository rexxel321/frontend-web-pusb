import PropTypes from 'prop-types';

const News = ({
  id,
  title,
  slug,
  category,
  content,
  description,
  thumbnail,
  image,
  publish_date,
  status,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <img src={thumbnail} alt={title} />
      <img src={image} alt={`${title} full`} />
      <p>{description}</p>
      <p>{content}</p>
      <p>Published on: {publish_date}</p>
      <p>Status: {status ? 'Published' : 'Draft'}</p>
    </div>
  );
};

News.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  publish_date: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
