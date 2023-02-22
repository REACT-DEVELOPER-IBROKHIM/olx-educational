import {useState, useEffect} from 'react';
import { instance } from '../api/instance';

const useFetchData = (ENDPOINT) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    instance.get(ENDPOINT)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
  }, [ENDPOINT])

  return [data, isLoading]
}

export default useFetchData