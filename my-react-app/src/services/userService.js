// Base URL for API requests comes from the Vite environment variable
const API_URL = import.meta.env.VITE_API_URL;

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

export function getUserMainData(id) {
  return request(`${API_URL}/${id}`, 'Impossible de récupérer les données utilisateur');
}

export function getUserActivity(id) {
  return request(`${API_URL}/${id}/activity`, "Impossible de récupérer l'activité utilisateur");
}

export function getUserAverageSessions(id) {
  return request(`${API_URL}/${id}/average-sessions`, 'Impossible de récupérer les sessions moyennes');
}

export function getUserPerformance(id) {
  return request(`${API_URL}/${id}/performance`, 'Impossible de récupérer la performance');
}
