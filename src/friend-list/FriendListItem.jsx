import PropTypes from 'prop-types';
import styles from './friend-list.module.css';

function FriendListItem({avatar, name, isOnline}) {
  return (
    <li className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}/>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};