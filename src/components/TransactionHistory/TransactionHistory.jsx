import {
  TransactionInfo,
  TransactionTable,
  TransactionTableHeader,
  TransactionTableHeaderCell,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <TransactionTableHeader>
          <TransactionTableHeaderCell>Type</TransactionTableHeaderCell>
          <TransactionTableHeaderCell>Amount</TransactionTableHeaderCell>
          <TransactionTableHeaderCell>Currency</TransactionTableHeaderCell>
        </TransactionTableHeader>
      </thead>

      <tbody>
        {items.map(t => (
          <TransactionInfo key={t.id}>
            <td>{t.type}</td>
            <td>{t.amount}</td>
            <td>{t.currency}</td>
          </TransactionInfo>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
