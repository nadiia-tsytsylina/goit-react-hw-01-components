import PropTypes from 'prop-types';
import {
  TransactionBox,
  Thead,
  HeadColumn,
  Row,
  Column,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionBox>
      <Thead>
        <tr>
          <HeadColumn>Type</HeadColumn>
          <HeadColumn>Amount</HeadColumn>
          <HeadColumn>Currency</HeadColumn>
        </tr>
      </Thead>

      <tbody>
        {items.map(item => (
          <Row key={item.id}>
            <Column>{item.type}</Column>
            <Column>{item.amount}</Column>
            <Column>{item.currency}</Column>
          </Row>
        ))}
      </tbody>
    </TransactionBox>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
