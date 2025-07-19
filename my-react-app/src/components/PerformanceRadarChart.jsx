import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts';
import './PerformanceRadarChart.css';

export default function PerformanceRadarChart({ data }) {
  if (!data) return null;

  const kindMap = data.kind;

  // ✅ On force l’ordre classique (intensité en haut)
  const radarOrder = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio'];

  const chartData = radarOrder.map((label) => {
    // Cherche le numéro de clé correspondant
    const kindKey = Object.keys(kindMap).find(
      (key) => kindMap[key].toLowerCase() === label
    );

    const dataPoint = data.data.find((d) => d.kind === parseInt(kindKey));

    return {
      kind: label.charAt(0).toUpperCase() + label.slice(1),
      value: dataPoint ? dataPoint.value : 0,
    };
  });

  return (
    <div className="radar-container">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={chartData} outerRadius="70%">
          <PolarGrid stroke="#fff" strokeOpacity={0.4} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: '#fff', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Radar
            dataKey="value"
            stroke="#ff0101"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
