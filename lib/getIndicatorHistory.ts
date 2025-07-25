export type Entry = {
  date: string;
  value: number | null;
};

export async function getIndicatorHistory(
  indicatorCode: string,
  countryCode: string,
  years = 10
): Promise<Entry[]> {
  const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicatorCode}?format=json&per_page=${years}`;
  const res = await fetch(url, { cache: "force-cache" });
  const json = await res.json();
  const entries = json?.[1] ?? [];

  return entries
    .filter((e: Entry) => e.value !== null)
    .map((e: Entry) => ({
      date: e.date,
      value: e.value,
    }))
    .reverse();
}
