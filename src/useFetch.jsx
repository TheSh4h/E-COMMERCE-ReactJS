import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        
            fetch(url)
            .then(res => {
                if (!res.ok){
                    throw new Error('Network Response Error')
                }

                return res.json();
            })
            .then(data => {
                setData(data)
                setLoading(false)
                setError(false)
                // console.log(data)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [url]);

    return { loading, data, error };
}
 
export default useFetch;