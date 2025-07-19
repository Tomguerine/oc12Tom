import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from 'recharts';

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length >= 2) {
    return (
      <div
        style={{
          background: '#e60000',
          color: '#fff',
          padding: '0.5rem',
          fontSize: 12,
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kCal</p>
      </div>
    );
  }
  return null;
}

import './ActivityChart.css';

export default function ActivityChart({ data }) {
  if (!data) return null;
  return (
    <div className="activity-chart-container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem',
        }}
      >
        <h3 className="activity-chart-title">Activité quotidienne</h3>
        <div style={{ display: 'flex', gap: '1rem', fontSize: 14 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span
              style={{
                width: 8,
                height: 8,
                background: '#000',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            Poids (kg)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span
              style={{
                width: 8,
                height: 8,
                background: '#e60000',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            Calories brûlées (kCal)
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data.sessions}
          margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
          style={{ background: '#f5f5f5' }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fontFamily: 'Roboto, sans-serif', fontSize: 12 }}
            tickFormatter={(_, index) => index + 1}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fontFamily: 'Roboto, sans-serif', fontSize: 12 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(230,0,0,0.1)' }}
          />
          <Bar dataKey="kilogram" fill="#000" radius={[3, 3, 0, 0]} barSize={7} />
          <Bar dataKey="calories" fill="#e60000" radius={[3, 3, 0, 0]} barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
