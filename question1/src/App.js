import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./compoent/Pagination";

function App() {
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://reqres.in/api/users`);
      setTotalPage(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log(loading);
  return (
    <div className="container mt-3 ">
      <h1 className="text-primary mb-3 d-flex justify-content-center align-items-center">
        Data Per Page
      </h1>
      <Pagination paginate={totalPage.total} totalPosts={totalPage.per_page} />
    </div>
  );
}

export default App;
