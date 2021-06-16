import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.title}>
        <tr className={styles.list}>
          <th className={styles.listItem}>Type</th>
          <th className={styles.listItem}>Amount</th>
          <th className={styles.listItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.secondList}>
        {items.map(item => {
          return (
            <tr key={item.id} className={styles.secondListItem}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
