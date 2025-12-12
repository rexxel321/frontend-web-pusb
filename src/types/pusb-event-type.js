import PropTypes from 'prop-types';

const Event = ({
  id,
  name,
  description,
  thumbnail,
  public_id,
  start_date,
  end_date,
  status,
  audience,
  period,
  ministry_name,
  participant_link,
  recruitment_link,
  audience_link,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={thumbnail} alt={name} />
      <p>{description}</p>
      <p>Start Date: {start_date}</p>
      <p>End Date: {end_date}</p>
      <p>Status: {status}</p>
      <p>Audience: {audience}</p>
      <p>Period: {period}</p>
      <p>Ministry: {ministry_name}</p>
      <a href={participant_link}>Participant Link</a>
      <a href={recruitment_link}>Recruitment Link</a>
      <a href={audience_link}>Audience Link</a>
    </div>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  public_id: PropTypes.string.isRequired,
  start_date: PropTypes.string.isRequired,
  end_date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  audience: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  ministry_name: PropTypes.string.isRequired,
  participant_link: PropTypes.string.isRequired,
  recruitment_link: PropTypes.string.isRequired,
  audience_link: PropTypes.string.isRequired,
};

const EventRequest = ({
  name,
  description,
  thumbnail,
  public_id,
  start_date,
  end_date,
  status,
  audience,
  period,
  ministry_name,
  participant_link,
  recruitment_link,
  audience_link,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={thumbnail} alt={name} />
      <p>{description}</p>
      <p>Start Date: {start_date.toLocaleDateString()}</p>
      <p>End Date: {end_date.toLocaleDateString()}</p>
      <p>Status: {status}</p>
      <p>Audience: {audience}</p>
      <p>Period: {period}</p>
      <p>Ministry: {ministry_name}</p>
      <a href={participant_link}>Participant Link</a>
      <a href={recruitment_link}>Recruitment Link</a>
      <a href={audience_link}>Audience Link</a>
    </div>
  );
};

EventRequest.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  public_id: PropTypes.string.isRequired,
  start_date: PropTypes.instanceOf(Date).isRequired,
  end_date: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.string.isRequired,
  audience: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  ministry_name: PropTypes.string.isRequired,
  participant_link: PropTypes.string.isRequired,
  recruitment_link: PropTypes.string.isRequired,
  audience_link: PropTypes.string.isRequired,
};

const EventTimeline = ({ id, title, description, event_date, status }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Event Date: {event_date}</p>
      <p>Status: {status ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

EventTimeline.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  event_date: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

const EventTimelineRequest = ({ title, description, event_date }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Event Date: {event_date}</p>
    </div>
  );
};

EventTimelineRequest.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  event_date: PropTypes.string.isRequired,
};