// https://blog.openreplay.com/integrating-axios-with-react-hooks/
import { useRef, useState, useEffect } from 'react';

import axios from 'axios';

/**
 *
 * @param {string} apiRoute
 * @param {'POST' | 'GET'} method
 * @param {{[key: string]: any} | undefined} payload
 * @returns
 */
export const useAxios = (apiRoute, method, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  const controllerRef = useRef(new AbortController());

  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request({
          data: payload,
          signal: controllerRef.current.signal,
          method,
          url: `${process.env.REACT_APP_API_URL}${apiRoute}`,
        });

        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { cancel, data, error, loaded };
};

