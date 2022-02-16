import React, { useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const loadApi = async () => {
    const getData = await fetch("https://reqres.in/api/users?page=1");
    const getResponse = await getData.json();
    setUsers(getResponse.data);
  };
  return (
    <>
      <div className="container my-5">
        <button
          className="btn btn-outline-success "
          type="submit"
          onClick={loadApi}
        >
          Get Users
        </button>

        <div className="container my-4">
          <h5>Users Data:</h5>
          <ul>
            {users.map(({ id, email, first_name, last_name, avatar }) => (
              <li key={id}>
                Email: {email} <br /> First Name: {first_name} <br />
                Last Name: {last_name}
                <br /> Avatar: {avatar}
                <br /> <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
