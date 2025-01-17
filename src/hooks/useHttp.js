import { useState } from "react";
import { sendHttpRequest } from "../util/http";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async (url, config) => {
    setLoading(true);
    try {
      const resData = await sendHttpRequest(url, config);
      setData(resData);
    } catch (error) {
      console.error("Error fetching data", error);
      setError(error.message);
    }
    setLoading(false);
  };

  return { data, error, loading, fetchData };
};
