export function calculateStreak(dates: string[]) {

  if (dates.length === 0) {
    return {
      streak: 0,
      total: 0,
      lastDate: null
    };
  }

  const sorted = [...dates].sort().reverse();

  let streak = 1;

  for (let i = 0; i < sorted.length - 1; i++) {

    const current = new Date(sorted[i]);
    const previous = new Date(sorted[i + 1]);

    const diff =
      (current.getTime() - previous.getTime()) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }

  }

  return {
    streak,
    total: dates.length,
    lastDate: sorted[0]
  };
}