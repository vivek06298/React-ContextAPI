import { Header } from './components/Header'
import { Blogs } from './components/Blogs'
import { Pagination } from './components/Pagination'
import { Appcontext } from "./context/Appcontext"
import { useContext, useEffect } from 'react'
import "./App.css"
export default function App() {

  const {fetchblogposts} = useContext(Appcontext);

  useEffect(() => {
   fetchblogposts();
  }, [])
  
  return (
  <div>
    <Header />
    <Blogs />
    <Pagination />
  </div>
  );
}
