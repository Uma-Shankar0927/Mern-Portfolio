import React, { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Achievments from "./Achievments";
import AOS from "aos";
import "aos/dist/aos.css";
import loadingGif from "../assets/loadingGif.gif";
import deleteIcon from "../assets/deleteIcon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Projects = () => {
  const navigate = useNavigate();
  const [allposts, setAllPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postDelete, setPostDelete] = useState(false);

  const checkUser = () => {
    let foo = prompt("Enter password:");
    if (foo === import.meta.env.VITE_REACT_APP_PROJECT_PASSWORD)
      navigate("/projectform");
    else if (foo){
      toast.error("Wrong password", {
        pauseOnHover: false,
        autoClose: 2000,
        theme: "dark",
      });
    };
  };
  const checkUserForDel = (_id,name) => {
    let foo = prompt("Enter password:");
    if (foo === import.meta.env.VITE_REACT_APP_PROJECT_PASSWORD) {
      // setDeleteOrNot(true);
      deletePost(_id,name);
    } else if(foo){
      toast.error("Wrong password!", {
        pauseOnHover: false,
        autoClose: 2000,
        theme: "dark",
      });
    }
  };
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/v1/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        // console.log(result.data);
        setAllPosts(result.data);
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    fetchPosts();
  }, [postDelete]);

  const deletePost = async (_id,name) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/post/${_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id, name }),
      });

      if (response.ok) {
        await response.json();
        setPostDelete(!postDelete);
        toast.success("deletion success", {
          pauseOnHover: false,
          autoClose: 2000,
          theme: "dark",
        });
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="projectu-main">
      <div className="skillsu-main">
        <motion.h3
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: easeInOut,
          }}
        >
          Languages:
        </motion.h3>
        <motion.p
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: easeInOut,
          }}
        >
          C++ C HTML CSS Javascript SQL
        </motion.p>
        <motion.h3
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: easeInOut,
          }}
        >
          Frameworks:
        </motion.h3>
        <motion.p
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: easeInOut,
          }}
        >
          ReactJs NodeJs ExpressJs Mongoose Bootstrap
        </motion.p>
      </div>
      <Achievments />

      <motion.h3
        style={{ marginBottom: "8px" }}
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: easeInOut,
        }}
      >
        My Projects
      </motion.h3>
      <div className="projectList">
        {loading ? (
          <img style={{ marginBottom: "60px" }} src={loadingGif} alt="" />
        ) : (
          allposts?.map((post) => (
            <div key={post._id} className="projectItem" data-aos="zoom-in">
              <div className="image-contain">
                <img src={post.file} alt="image" />
              </div>
              <p>{post.name}</p>
              <div className="Plinks">
                <Link to={post.codelink}>Source Code</Link>
                <Link to={post.livelink}>Live Link</Link>
              </div>
              <img
                className="delIcon"
                src={deleteIcon}
                alt=""
                onClick={() => {checkUserForDel(post._id,post.name)}}
              />
            </div>
          ))
        )}
      </div>
      <div className="Faplu">
        <p className="Fap" onClick={checkUser}>
          Add Project
        </p>
      </div>
      <div className="marginb"></div>
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
};

export default Projects;
