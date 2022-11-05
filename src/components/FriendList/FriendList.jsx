import { FriendListUl } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        ></FriendListItem>
      ))}
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
