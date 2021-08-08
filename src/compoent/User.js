import React from "react";

const User = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {data.map((da) => {
        return (
          <div className="card m-2 shadow-lg rounded" key={da.id}>
            <img src={da.avatar} alt="avatar" height="300" />
            <div className="card-body">
              <h2 className="card-title">{da.first_name}</h2>
              <p className="card-text">{da.last_name}</p>
              <p className="card-text">{da.email}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default User;
