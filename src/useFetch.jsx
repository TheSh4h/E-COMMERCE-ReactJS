import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok){
                    throw new Error('Network Response Error')
                }

                return res.json();
            })
            .then(data => {
                setProducts(data)
                setLoading(false)
                setError(false)
                console.log(data)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
        }, 5000);
    }, [url]);

    return { loading, products, error };
}
 
export default useFetch;