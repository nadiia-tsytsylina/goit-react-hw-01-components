import PropTypes from 'prop-types';
import getRandomHexColor from 'utils/RandomColor';
import { Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
