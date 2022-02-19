import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { PushSpinner } from "react-spinners-kit";

export const Users = () => {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState(true);

  const loadAPI = async (e) => {
    setLoader(false);
    e.preventDefault();
    const response = await axios.get("https://reqres.in/api/users?page=1");
    setList(response.data.data);
    setTimeout(() => {
      setLoader(true);
    }, 2000);
  };

  return (
    <>
      <div className="content">
        <div className="form">
          <div className="text">
            {list.length === 0 ? (
              <h5 className="my-3 py-3">
                Click On the below button to get the data &#128521;
              </h5>
            ) : (
              <div className="contents">
                {loader ? (
                  list.map((e) => (
                    <p className="segment" key={e.id}>
                      <div className="avatar">
                        <img src={e.avatar} alt="" srcset="" />
                      </div>
                      <div className="name">
                        <span>
                          {e.first_name} {e.last_name}
                        </span>
                        <br />
                        <span>{e.email}</span>
                      </div>
                    </p>
                  ))
                ) : (
                  <div className="spinner">
                    <PushSpinner
                      className="spinner"
                      size={50}
                      color="#87CEEB"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            <form onSubmit={loadAPI}>
              <button type="submit" className="btn btn-outline-success">
                Get Users
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
