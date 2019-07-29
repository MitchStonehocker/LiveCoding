// src/hooks/useWCAPI.js

import { useState, useEffect } from "react";
import axios from "axios";

export default function useWCAPI(func, args) {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(">>>-useWCAPI-args->", args);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }
    console.log(">>>-getRandomInteger-fetchData-data->", data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const getRandomInteger = (event, func, arg) => {
    event.preventDefault();
    setUrl(`${wcBaseUrl}${wcEndPoint}${func}?x=${arg.x}&y=${arg.y}`);
  };

  return { data, isLoading, isError, getRandomInteger };
}
