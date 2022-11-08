import { FriendStatus, FriendItem, FriendName } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus status={isOnline ? 'green' : 'red'}></FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
