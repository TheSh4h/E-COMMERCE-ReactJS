import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext } from "../context/search-context";

const SearchBar = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const { setValue } = useContext(searchContext)

    const urls = [
        'http://localhost:4000/gym',
        'http://localhost:4000/books',
        'http://localhost:4000/outfits',
        'http://localhost:4000/electronics'
    ]

    useEffect(() => {
        urls.map((url) => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setResults(data)
            })
            .catch(error => console.log('There was a problem!', error))
        })
    }, []);

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search")
    }

    useEffect(() => {
        if(input.length > 0) {
            const filteredResult = results.filter((item) =>
            item.title.toLowerCase().includes(input.toLowerCase())
        );
        setValue(filteredResult);
        }
    }, [input, results]);

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