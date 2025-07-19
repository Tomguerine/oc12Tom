import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import './ScoreRadialChart.css';

export default function ScoreRadialChart({ data }) {
  if (!data) return null;

  const score = data.todayScore ?? data.score;
  if (score == null) return null;

  const percent = score * 100;

  const chartData = [
    { name: 'score', value: percent, fill: '#ff0000' },
    { name: 'rest', value: 100 - percent, fill: '#fbfbfb' },
  ];

  return (
    <div className="score-chart-container">
      <h2 className="score-title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={chartData}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            clockWise
            dataKey="value"
            cornerRadius={50}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-chart-label">
        <span className="score-percent">{percent}%</span>
        <span className="score-text">de votre objectif</span>
      </div>
    </div>
  );
}
