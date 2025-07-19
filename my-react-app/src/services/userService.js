// Base URL for API requests comes from the Vite environment variable
const API_URL = import.meta.env.VITE_API_URL;
// When this flag is set to "true" in the environment, mocked data will be used
// instead of performing network requests
const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === 'true';

import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from '../models/userModels.js';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './mockData.js';

async function request(endpoint, defaultMessage) {
  try {
    const res = await fetch(endpoint);
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      const msg = data?.message || data?.error || defaultMessage;
      throw new Error(msg);
    }
    return data?.data ?? data;
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Error('Service indisponible');
    }
    throw err;
  }
}

export async function getUserMainData(id) {
  if (USE_MOCKS) {
    const raw = USER_MAIN_DATA.find((u) => u.id === Number(id));
    if (!raw) {
      throw new Error('Utilisateur inconnu');
    }
    return new UserMainData(raw);
  }
  const data = await request(
    `${API_URL}/${id}`,
    'Impossible de récupérer les données utilisateur'
  );
  return new UserMainData(data);
}

export async function getUserActivity(id) {
  if (USE_MOCKS) {
    const raw = USER_ACTIVITY.find((a) => a.userId === Number(id));
    if (!raw) {
      throw new Error('Activité indisponible');
    }
    return new UserActivity(raw);
  }
  const data = await request(
    `${API_URL}/${id}/activity`,
    "Impossible de récupérer l'activité utilisateur"
  );
  return new UserActivity(data);
}

export async function getUserAverageSessions(id) {
  if (USE_MOCKS) {
    const raw = USER_AVERAGE_SESSIONS.find((s) => s.userId === Number(id));
    if (!raw) {
      throw new Error('Sessions moyennes indisponibles');
    }
    return new UserAverageSessions(raw);
  }
  const data = await request(
    `${API_URL}/${id}/average-sessions`,
    'Impossible de récupérer les sessions moyennes'
  );
  return new UserAverageSessions(data);
}

export async function getUserPerformance(id) {
  if (USE_MOCKS) {
    const raw = USER_PERFORMANCE.find((p) => p.userId === Number(id));
    if (!raw) {
      throw new Error('Performance indisponible');
    }
    return new UserPerformance(raw);
  }
  const data = await request(
    `${API_URL}/${id}/performance`,
    'Impossible de récupérer la performance'
  );
  return new UserPerformance(data);
}
