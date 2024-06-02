import { useEffect, useState } from 'react';
import AlertTypeChart from './components/alertTypeChart';
import SeverityChart from './components/severityChart';
import TrafficChart from './components/trafficChart';
import data from './data/eve.json';

const App = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    setAlerts(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Network Alerts Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Alert Types</h2>
          <AlertTypeChart data={alerts} />
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Severity Levels</h2>
          <SeverityChart data={alerts} />
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold mb-2">Traffic Over Time</h2>
          <TrafficChart data={alerts} />
        </div>
      </div>
    </div>
  );
};

export default App;
