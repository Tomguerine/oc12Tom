// Base URL for API requests comes from the Vite environment variable
const API_URL = import.meta.env.VITE_API_URL;

import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from '../models/userModels.js';

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
  const data = await request(
    `${API_URL}/${id}`,
    'Impossible de récupérer les données utilisateur'
  );
  return new UserMainData(data);
}

export async function getUserActivity(id) {
  const data = await request(
    `${API_URL}/${id}/activity`,
    "Impossible de récupérer l'activité utilisateur"
  );
  return new UserActivity(data);
}

export async function getUserAverageSessions(id) {
  const data = await request(
    `${API_URL}/${id}/average-sessions`,
    'Impossible de récupérer les sessions moyennes'
  );
  return new UserAverageSessions(data);
}

export async function getUserPerformance(id) {
  const data = await request(
    `${API_URL}/${id}/performance`,
    'Impossible de récupérer la performance'
  );
  return new UserPerformance(data);
}
