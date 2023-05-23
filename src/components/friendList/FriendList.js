import PropTypes from 'prop-types';
import FriendListItem from 'components/friendListItem/FriendListItem';
import { FriendListBox } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListBox>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListBox>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
