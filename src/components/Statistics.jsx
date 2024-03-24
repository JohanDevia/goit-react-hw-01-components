import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsList,
  StatisticsItem,
} from './Statistic.styled';

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <StatisticsSection className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <StatisticsList className="stat-list">
        {stats.map((stat, index) => (
          <StatisticsItem
            className="item"
            key={index}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
