import { useState, useEffect } from 'react';

export const useAsyncState = <T>(
  fetch: () => Promise<T>,
  dependencies?: any[]
): [T | undefined, boolean] => {
  const [storedData, setStoredData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const updateState = async () => {
      setLoading(true);
      const data = await fetch();
      setStoredData(data);
      setLoading(false);
    };

    updateState();
  }, dependencies);

  return [storedData, loading];
};
