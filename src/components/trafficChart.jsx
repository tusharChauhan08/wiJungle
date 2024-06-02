import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';

const TrafficChart = ({ data }) => {
  const traffic = data.map(alert => ({
    timestamp: new Date(alert.timestamp).toLocaleTimeString(),
    value: alert.flow_id,
  }));

  return (
    <LineChart width={450} height={300} data={traffic}>
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
};

TrafficChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      flow_id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TrafficChart;
