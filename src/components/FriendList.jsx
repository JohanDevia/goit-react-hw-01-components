import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendItem,
  StatusItem,
  ParagraphfItem,
} from './FriendList.styled';
const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map((friend, index) => (
        <FriendItem key={index} className="item">
          <StatusItem
            className={`status ${friend.isOnline ? 'online' : 'offline'}`}
          ></StatusItem>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <ParagraphfItem className="name">{friend.name}</ParagraphfItem>
        </FriendItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
