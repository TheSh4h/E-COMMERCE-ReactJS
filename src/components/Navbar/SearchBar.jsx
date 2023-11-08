import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext } from "../../context/search-context";
import db from "../../data/db.json";


const SearchBar = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [searchValue, setSearchValue] = useState("")
    const [results, setResults] = useState([]);

    const { setValue, setLoading } = useContext(searchContext)

    const urls = [
        db["products"],
        db["gym"],
        db["electronics"],
        db["books"],
        db["outfits"]
    ]
    const allData = urls.flat();
    setLoading(false)
    /*
useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = urls.map(async (url) => {
                    const res = await fetch(url);
                    if (!res.ok) {
                        throw new Error('Network Response Error');
                    }
                    const data = await res.json();
                    return data;
                });
                const allData = await Promise.all(promises);
                setResults(allData.flat()); // Flatten the array of arrays
                setLoading(false);
            } catch (error) {
                console.error('There was a problem!', error);
            }
        };
    
        fetchData();
    }, []); */

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search")
        setSearchValue(input)
    }

    useEffect(() => {
        if(searchValue.length > 0) {
            const filteredResult = allData.filter((item) =>
            item.title.toLowerCase().match(searchValue.toLowerCase())
        );
        setValue(filteredResult);
        }
    }, [searchValue, results]);

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="flex items-center relative w-96 text-black">
                <input 
                    className="bg-slate-200 rounded-2xl h-10 w-96 outline-none p-3" 
                    type="text" 
                    placeholder="Search Product"
                    onChange={handleChange} 
                />
                <div className="absolute right-0 p-1 flex items-center cursor-pointer ">
                    <Link to={"search"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            </form>
     );
}
 
export default SearchBar;