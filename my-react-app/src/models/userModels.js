export class UserMainData {
  constructor(data = {}) {
    this.id = data.id;
    this.userInfos = { ...data.userInfos };
    this.score = data.todayScore ?? data.score ?? 0;
    this.keyData = { ...data.keyData };
  }
}

export class UserActivity {
  constructor(data = {}) {
    this.userId = data.userId;
    this.sessions = Array.isArray(data.sessions)
      ? data.sessions.map((s) => ({
          day: s.day,
          kilogram: s.kilogram,
          calories: s.calories,
        }))
      : [];
  }
}

export class UserAverageSessions {
  constructor(data = {}) {
    this.userId = data.userId;
    this.sessions = Array.isArray(data.sessions)
      ? data.sessions.map((s) => ({
          day: s.day,
          sessionLength: s.sessionLength,
        }))
      : [];
  }
}

export class UserPerformance {
  constructor(data = {}) {
    this.userId = data.userId;
    this.kind = { ...data.kind };
    this.data = Array.isArray(data.data)
      ? data.data.map((d) => ({ value: d.value, kind: d.kind }))
      : [];
  }
}
