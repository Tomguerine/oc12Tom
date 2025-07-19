import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from 'recharts';
import './AverageSessionsChart.css';

const DAY_LETTERS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="session-tooltip">
        {payload[0].value} min
      </div>
    );
  }
  return null;
}

export default function AverageSessionsChart({ data }) {
  if (!data) return null;

  return (
    <div className="session-container">
      <h2 className="session-title">Durée moyenne des sessions</h2>
      <div className="session-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data.sessions}
            margin={{ top: 50, right: 15, left: 15, bottom: 10 }}
          >
            <defs>
              <linearGradient id="sessionGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#ffffff', opacity: 0.5, fontSize: 12 }}
              tickFormatter={(day) => DAY_LETTERS[day - 1]}
              padding={{ left: 10, right: 10 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="url(#sessionGradient)"
              strokeWidth={2}
              dot={false} // ✅ pas de points par défaut
              activeDot={{
                stroke: '#fff',
                strokeWidth: 4,
                fill: '#fff',
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
