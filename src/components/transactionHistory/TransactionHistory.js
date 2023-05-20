import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr className={css.Headrow}>
          <th className={css.headColumn}>Type</th>
          <th className={css.headColumn}>Amount</th>
          <th className={css.headColumn}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.row}>
            <td className={css.column}>{item.type}</td>
            <td className={css.column}>{item.amount}</td>
            <td className={css.column}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
