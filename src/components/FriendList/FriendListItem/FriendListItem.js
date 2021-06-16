import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import { createUseStyles } from 'react-jss';

const colors = createUseStyles({
  green: {
    backgroundColor: 'green',
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  red: {
    backgroundColor: 'red',
    width: 10,
    height: 10,
    borderRadius: 50,
  },
});

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const color = colors();
  return (
    <li key={id} className={styles.item}>
      {isOnline ? <span className={color.green}></span> : <span className={color.red}></span>}
      <img className={styles.avatar} width="48" src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
