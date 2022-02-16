import React, { useState } from "react";

export const Forms = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [img, setImg] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !web || !img || !gender || !skills) {
      alert("There Can't be any Blank Form !!!");
    } else {
      props.Display(name, email, web, img, gender, skills);
      setName("");
      setEmail("");
      setWeb("");
      setImg("");
      setGender("");
      setSkills("");
    }
  };

  const clear = (e) => {};

  return (
    <>
      <div className="container my-5">
        <form onSubmit={submit} onClear={clear}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Website:
            </label>
            <input
              type="url"
              className="form-control"
              id="website"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image Link:
            </label>
            <input
              type="url"
              className="form-control"
              id="image"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>{" "}
            <br />
            <input type="radio" value="Male" name="gender" /> Male <br />
            <input type="radio" value="Female" name="gender" /> Female <br />
            <input type="radio" value="Other" name="gender" /> Other
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">
              Skills:
            </label>{" "}
            <br />
            <input type="checkbox" value="Male" name="gender" /> Java <br />
            <input type="checkbox" value="Female" name="gender" /> HTML <br />
            <input type="checkbox" value="Other" name="gender" /> CSS
          </div>
          <button type="submit" className="btn btn-success btn-sm">
            Enroll Student &#128512;
          </button>{" "}
          <button type="clear" className="btn btn-danger btn-sm ">
            Clear &#128512;
          </button>
        </form>
      </div>
    </>
  );
};
