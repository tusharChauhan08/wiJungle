import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import PropTypes from 'prop-types';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AlertTypeChart = ({ data }) => {
  const alertTypes = data.reduce((acc, alert) => {
    const type = alert.alert?.signature;
    if (type) {
      if (!acc[type]) acc[type] = 0;
      acc[type]++;
    }
    return acc;
  }, {});

  const chartData = Object.entries(alertTypes).map(([name, value]) => ({ name, value }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        cx={200}
        cy={200}
        labelLine={false}
        label
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

AlertTypeChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      alert: PropTypes.shape({
        signature: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default AlertTypeChart;
