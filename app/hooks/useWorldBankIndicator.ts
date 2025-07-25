import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useIndicator(indicator: string, country = "AR") {
  const url = `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json&per_page=1`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  const value = data?.[1]?.[0]?.value;

  return {
    value,
    isLoading,
    isError: !!error,
  };
}
