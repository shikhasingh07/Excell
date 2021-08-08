import { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

const Pagination = ({ paginate, totalPosts }) => {
  const [loading, setLoading] = useState(false);
  const [data, SetData] = useState([]);
  const [pagetoShow, setPageToshow] = useState(0);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(paginate / totalPosts); i++) {
    pageNumbers.push(i);
  }

  const handlePage = (index) => {
    setPageToshow(index);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://reqres.in/api/users/?page=${pagetoShow} `
      );
      SetData(res.data.data);
      setLoading(false);
    };
    fetchPosts();
  }, [pagetoShow]);

  return (
    <>
      <div className="row d-flex ">
        <div className="pagination justify-content-center">
          {pageNumbers.map((number, index) => (
            <div key={number} className="page-item ">
              <div
                className="page-link text-dark ms-4"
                onClick={() => handlePage(index + 1)}
              >
                {number}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto cardMain ">
        <User data={data} loading={loading} />
      </div>
    </>
  );
};

export default Pagination;
