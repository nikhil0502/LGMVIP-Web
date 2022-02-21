import React, { useState } from "react";

export const Forms = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    website: "",
    image: "",
    skills: false,
    gender: "other",
  });

  const [records, setRecords] = useState([]);

  const input = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // const type = e.target;
    // const checked = e.target;
    const { name, value, type, checked } = e.target;
    setUserRegistration({
      ...userRegistration,
      [name]: type === "checkbox" ? checked : value,
    });

    // setUserRegistration({ ...userRegistration, [name]: value });
  };

  const Enroll = (e) => {
    e.preventDefault();
    if (
      !userRegistration.username ||
      !userRegistration.email ||
      !userRegistration.website ||
      !userRegistration.image
    ) {
      alert("Form Can't be Blank !!!");
    } else {
      const newRecord = {
        ...userRegistration,
        id: new Date().getTime().toString(),
      };
      console.log(records);
      setRecords([...records, newRecord]);
      setUserRegistration({
        username: "",
        email: "",
        website: "",
        image: "",
        skills: false,
        gender: "other",
      });
    }
  };

  const clear = (e) => {
    e.preventDefault();

    setUserRegistration({
      username: "",
      email: "",
      website: "",
      image: "",
      skills: false,
      gender: "other",
    });
  };

  return (
    <>
      <div className="container my-5">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              value={userRegistration.username}
              onChange={input}
              id="name"
              aria-describedby="emailHelp"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              value={userRegistration.email}
              onChange={input}
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Website:
            </label>
            <input
              type="url"
              className="form-control"
              value={userRegistration.website}
              onChange={input}
              id="website"
              aria-describedby="emailHelp"
              name="website"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image Link:
            </label>
            <input
              type="url"
              className="form-control"
              value={userRegistration.image}
              onChange={input}
              id="image"
              aria-describedby="emailHelp"
              name="image"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>{" "}
            <br />
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={input}
              checked={userRegistration.gender === "male"}
            />{" "}
            Male <br />
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={input}
              checked={userRegistration.gender === "female"}
            />{" "}
            Female <br />
            <input
              type="radio"
              value="other"
              name="gender"
              onChange={input}
              checked={userRegistration.gender === "other"}
            />{" "}
            Other
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">
              Skills:
            </label>{" "}
            <br />
            <input
              type="checkbox"
              value="JAVA"
              name={userRegistration.skills}
              onChange={input}
            />{" "}
            Java <br />
            <input
              type="checkbox"
              value="HTML"
              name={userRegistration.skills}
              onChange={input}
            />{" "}
            HTML <br />
            <input
              type="checkbox"
              value="CSS"
              name={userRegistration.skills}
              onChange={input}
            />{" "}
            CSS
          </div>
          <button
            type="submit"
            className="btn btn-success btn-sm"
            onClick={Enroll}
          >
            Enroll Student &#128512;
          </button>{" "}
          <button
            type="clear"
            className="btn btn-danger btn-sm "
            onClick={clear}
          >
            Clear &#128512;
          </button>
        </form>
      </div>
      <div className="container">
        {records.map((cur) => {
          return (
            <div className="" key={cur.id}>
              <p>{cur.username}</p>
              <p>{cur.gender}</p>
              <p>{cur.email}</p>
              <a href={cur.website} target="_blank">
                {cur.website}
              </a>

              <p>{cur.skills},</p>
              <div>
                <img src={cur.image} alt="" width="100px" height="100px" />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};
