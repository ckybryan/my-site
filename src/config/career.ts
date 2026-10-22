// Career clocks. Every "years of experience" figure on the site reads from here, so the number
// rolls over on its own instead of waiting for someone to notice a stale hardcoded 8.

export const CAREER_START = { year: 2017, month: 11 } as const; // first day at GoBolt, as a frontend intern

/**
 * Years in the industry, counting the year in progress.
 *
 * Joined November 2017, so October 2026 reads 8 years and 11 months, which this reports as 9. That
 * matches how the figure is spoken and written ("9 years now"), and it does not jump to 10 until the
 * twelfth month has actually started. Whole calendar-year subtraction would read 10 from January 2027.
 */
export function careerYears(now: Date = new Date()): number {
  const months =
    (now.getFullYear() - CAREER_START.year) * 12 + (now.getMonth() + 1 - CAREER_START.month);
  return Math.max(0, Math.ceil(months / 12));
}
