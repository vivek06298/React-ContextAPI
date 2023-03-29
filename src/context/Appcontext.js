import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from '../baseUrl';

export const Appcontext = createContext();

export default function Appcontextprovider({children}){

    const [loading, setloading] = useState(false);
    const [posts, setposts] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpages, settotalpages] = useState(null);

    async function fetchblogposts(page = 1){
        setloading(true);   
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setpage(data.page);
            setposts(data.posts);
            settotalpages(data.totalPages);

        }
        catch(error){
            console.log("error in fetching data ");
            setpage(1);
            setposts([]);
            settotalpages(null);
        }
        setloading(false);   
    }

    function handlepagechange(page){
        setpage(page);
        fetchblogposts(page);
    }

    const values = {
        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        totalpages,
        settotalpages,
        fetchblogposts,
        handlepagechange    
    };
   
    return <Appcontext.Provider value={values}>
        {children}
    </Appcontext.Provider>;
}