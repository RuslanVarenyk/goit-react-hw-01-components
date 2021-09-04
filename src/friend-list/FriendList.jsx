import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';
import styles from './friend-list.module.css';

function FriendList({friends}) {
  return (
    <ul className={styles.friendList}>
        {friends.map(friend => 
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline} />
        )}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array,
};