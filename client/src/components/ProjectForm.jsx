import React, { useState, useEffect } from "react";
import loadingGif from "../assets/loadingGif.gif";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectForm = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    file: "",
    name: "",
    livelink: "",
    codelink: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { file, name, livelink, codelink } = formdata;
    if (file && name && livelink && codelink) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file: file,
            name: name,
            livelink: livelink,
            codelink: codelink,
          }),
        });

        await response.json();
        toast.success("Success", {
          pauseOnHover: false,
          autoClose: 2000,
          theme: "dark",
        });
        navigate("/projects");
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill all details");
    }
  };

  return (
    <div className="main-form">
      <form>
        <input
          placeholder="Image link"
          type="text"
          name="file"
          id=""
          value={formdata.file}
          onChange={handleChange}
        />
        <input
          placeholder="Project name"
          type="text"
          name="name"
          id=""
          value={formdata.name}
          onChange={handleChange}
        />
        <input
          placeholder="Live link"
          type="text"
          name="livelink"
          value={formdata.livelink}
          onChange={handleChange}
        />
        <input
          placeholder="Github link"
          type="text"
          name="codelink"
          value={formdata.codelink}
          onChange={handleChange}
        />
        <div className="btn-div">
          <button
            onClick={() => {
              navigate("/projects");
            }}
          >
            Back
          </button>
          {loading ? (
            <img src={loadingGif} alt="" />
          ) : (
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </form>
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
};

export default ProjectForm;
