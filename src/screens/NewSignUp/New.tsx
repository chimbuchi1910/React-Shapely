import React, { useState } from "react";
import "./New.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const New = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title: title,
      body: body,
    };
    const headers: any = {
      "content-Type": "application/json",
    };
    axios
      .post("http://localhost:2000/Content/", data, headers)
      .then((response: any) => {
        console.log(response.data);
        localStorage.setItem("title", response.data.title);
        localStorage.setItem("body", response.data.body);
        navigate("/Login");
        setLoading(false);
        if (response.data) {
          setSuccessMsg("Signup Successful");
        } else {
        }
      })
      .catch((error: any) => {
        setLoading(false);
        setErrorMsg("Invalid credentials, failed to create user");
      });
  };
  return (
    <div>
      <div className="main">
        <h1>GeeksforGeeks</h1>
        <h3>Enter your comment</h3>
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            placeholder="Title "
            required
          />

          <label htmlFor="body">Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            id="body"
            name="body"
            placeholder="Body"
            required
          />

          {loading ? (
            <div>Loading.....</div>
          ) : (
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          )}
          {errorMsg && (
            <div style={{ color: "white", backgroundColor: "red" }}>
              {errorMsg}
            </div>
          )}
        </form>

        {/* <div className="wrap">
          <button type="submit">Submit</button>
        </div> */}

        <p>
          Not registered?
          <a href="#" style={{ textDecoration: "none;" }}>
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default New;
