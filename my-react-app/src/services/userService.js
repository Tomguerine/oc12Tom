// Base URL for API requests comes from the Vite environment variable
const API_URL = import.meta.env.VITE_API_URL;

export async function getUserMainData(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user main data');
  }
  const json = await res.json();
  return json.data;
}

export async function getUserActivity(id) {
  const res = await fetch(`${API_URL}/${id}/activity`);
  if (!res.ok) {
    throw new Error('Failed to fetch user activity');
  }
  const json = await res.json();
  return json.data;
}

export async function getUserAverageSessions(id) {
  const res = await fetch(`${API_URL}/${id}/average-sessions`);
  if (!res.ok) {
    throw new Error('Failed to fetch user average sessions');
  }
  const json = await res.json();
  return json.data;
}

export async function getUserPerformance(id) {
  const res = await fetch(`${API_URL}/${id}/performance`);
  if (!res.ok) {
    throw new Error('Failed to fetch user performance');
  }
  const json = await res.json();
  return json.data;
}
