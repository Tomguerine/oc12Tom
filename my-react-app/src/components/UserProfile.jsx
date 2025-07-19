import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';
import ActivityChart from './ActivityChart.jsx';
import AverageSessionsChart from './AverageSessionsChart.jsx';
import PerformanceRadarChart from './PerformanceRadarChart.jsx';
import ScoreRadialChart from './ScoreRadialChart.jsx';
import KeyDataCard, { KEY_INFO } from './KeyDataCard.jsx';
import './UserProfile.css';
import {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../services/userService.js';

export default function UserProfile({ userId: propUserId }) {
  const { id } = useParams();
  const userId = propUserId ?? id;
  const [mainData, setMainData] = useState(null);
  const [activity, setActivity] = useState(null);
  const [average, setAverage] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;
    async function fetchData() {
      try {
        const [main, act, avg, perf] = await Promise.all([
          getUserMainData(userId),
          getUserActivity(userId),
          getUserAverageSessions(userId),
          getUserPerformance(userId),
        ]);
        setMainData(main);
        setActivity(act);
        setAverage(avg);
        setPerformance(perf);
      } catch (err) {
        setError(err.message || 'Service indisponible');
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    fetchData();
  }, [userId]);

  if (error) {
    return (
      <div>
        <Header />
        <p>Error: {error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <Header />
        <p>Chargement…</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="welcome">
        <h2>Bonjour <span>{mainData?.userInfos?.firstName}</span></h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className="dashboard-layout">
        <div className="dashboard-main">
          <div className="chart-container">
            <ActivityChart data={activity} />
          </div>
          <div className="chart-container">
            <AverageSessionsChart data={average} />
          </div>
          <div className="chart-container">
            <PerformanceRadarChart data={performance} />
          </div>
          {mainData && (
            <div className="chart-container">
              <ScoreRadialChart data={mainData} />
            </div>
          )}
        </div>
        <aside className="dashboard-aside">
          {mainData &&
            ['calorieCount', 'proteinCount', 'carbohydrateCount', 'lipidCount'].map(
              (key) => {
                const value = mainData.keyData?.[key];
                if (value == null) return null;
                const info = KEY_INFO[key] || { label: key, unit: '', icon: '' };
                return (
                  <KeyDataCard
                    key={key}
                    label={info.label}
                    value={value}
                    unit={info.unit}
                    icon={info.icon}
                    bgColor={info.bgColor}
                  />
                );
              }
            )}
        </aside>
      </div>
    </div>
  );
}
