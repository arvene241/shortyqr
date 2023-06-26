import useSWR from "swr";

const useShort = (url: string) => {
  const fetcher = (url: string) => fetch(url).then(res => res.json())

  const { data, error, isLoading } = useSWR(`https://api.shrtco.de/v2/shorten?url=${url}`, fetcher)

  return {
    data, error, isLoading
  };
}
 
export default useShort;