import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("idel");

    useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        //console.log(url);
        const res = await axios.get(url);
        setData(res.data);
        setStatus("success");
      
      } catch (err) {
        setError(err);
        setStatus("fail");
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);


  return { data, loading, error, status};
};


export default useFetch;

