export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);
  if (res.ok) {
    return res.json();
  } else {
    return res.statusText;
  }
};
