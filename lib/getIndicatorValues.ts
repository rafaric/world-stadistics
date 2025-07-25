export async function getIndicatorValue(
  countryCode: string,
  indicatorCode: string
): Promise<{ value: number | null; year: string | null }> {
  const url = `https://api.worldbank.org/v2/country/${countryCode}/indicator/${indicatorCode}?format=json&per_page=100`;

  try {
    const res = await fetch(url, { cache: "force-cache" });
    const data = await res.json();

    // El formato es: [metadata, [series]]
    const entries = data[1] as Array<{
      value: number | null;
      date: string;
    }>;

    if (!entries || entries.length === 0) return { value: null, year: null };

    // Busca el primer valor no nulo más reciente
    const latest = entries.find((e) => e.value !== null);
    return latest
      ? { value: latest.value, year: latest.date }
      : { value: null, year: null };
  } catch (error) {
    console.error("Error al obtener indicador", indicatorCode, error);
    return { value: null, year: null };
  }
}
