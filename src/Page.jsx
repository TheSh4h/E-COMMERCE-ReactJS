import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Page = ({ type }) => {
    const { title } = useParams(); //renders with the path name
    const url = 'http://localhost:4000/' + type + '/' + title;
    const {loading, data, error} = useFetch(url);
    console.log(title)
    return ( 
        <>
        <div>{data.title}</div>
        </>
     );
}
 
export default Page;