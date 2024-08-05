import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://jsearch.p.rapidapi.com/${endpoint}`,
        {
          params: {
            ...query
          },
          headers: {
            'x-rapidapi-key': '3b176ac147mshaad90d7b9609b08p1e1690jsn6e268f2896f1',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com',
          },
        }
      );
      setData(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query.query]);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
