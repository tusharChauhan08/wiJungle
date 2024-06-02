import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';

const SeverityChart = ({ data }) => {
  const severities = data.reduce((acc, alert) => {
    const severity = alert.alert?.severity;
    if (severity !== undefined) {
      if (!acc[severity]) acc[severity] = 0;
      acc[severity]++;
    }
    return acc;
  }, {});

  const chartData = Object.entries(severities).map(([name, value]) => ({ name, value }));

  return (
    <BarChart width={400} height={300} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

SeverityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      alert: PropTypes.shape({
        severity: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default SeverityChart;
