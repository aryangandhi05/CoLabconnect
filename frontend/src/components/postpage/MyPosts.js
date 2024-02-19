import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./mypost.css";
import logo from "../../images/logo_fly.png";
import Footer from "../mainpage/footer";
import { Button } from ".././searchpage/Button";

const Mypost = () => {
  const [posts, setPosts] = useState([]);

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await fetch("/myposts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      if (response.status === 200) {
        setPosts(data);
      } else {
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`/deletepost/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      if (response.status === 200) {
        alert("Post deleted successfully");
        fetchPosts();
      } else {
        alert("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  // Use useEffect to fetch posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {posts.length === 0 ? (
          <p>No posts to display</p>
        ) : (
          posts.map((post) => (
            <div key={post.post_id}>
              <div className="topic">
                <div className="text_t">{post.Topic}</div>
              </div>

              <div className="container_t">
                <div className="main">
                  <div className="post_m">
                    <div className="logo">
                      <img src={logo} alt="image" />
                    </div>

                    <div className="post">
                      <h3 className="post_r"></h3>
                      <span className="role">{post.Name}</span>
                      <div className="icon"></div>
                      <h4 className="comp">{post.Profession}</h4>
                      <i className="zmdi zmdi-pin-drop material-icons-name "></i>
                      <span className="loc">{post.Workplace}</span>
                    </div>
                  </div>

                  <div className="details">
                    <div className="other_d">
                      <div className="startD_c">
                        <div className="startD">
                          <i className="zmdi zmdi-time material-icons-name "></i>
                          <span className="startHead">Start Date</span>
                        </div>
                        <div className="start_d">
                          <div className="start_date">{post.StartDate}</div>
                        </div>
                      </div>
                      <div className="startD_c">
                        <div className="startD">
                          <i className="zmdi zmdi-calendar-alt material-icons-name "></i>
                          <span className="startHead">Duration</span>
                        </div>
                        <div className="start_d">
                          <div className="start_date">{post.Duration}</div>
                        </div>
                      </div>
                    </div>
                    <div className="other_d">
                      <div className="startD_c">
                        <div className="startD">
                          <i className="zmdi zmdi-money-box material-icons-name "></i>
                          <span className="startHead">Stipend</span>
                        </div>
                        <div className="start_d">
                          <div className="start_date">{post.Stipend}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main_content">
                  <div className="about">About Company</div>
                  <div className="compC">{post.Aboutcompany}</div>
                  <div className="about">About Post</div>
                  <div className="compC">{post.Aboutpost}</div>

                  <div className="about">Required Skill(s)</div>
                  <div className="skillC">
                    <div className="skilltab">{post.Skill1}</div>
                    <div className="skilltab">{post.Skill2}</div>
                    <div className="skilltab">{post.Skill3}</div>
                    <div className="skilltab">{post.Skill4}</div>
                  </div>

                  <div className="about">Perks</div>
                  <div className="skillC">
                    <div className="skilltab">{post.Perk1}</div>
                    <div className="skilltab">{post.Perk2}</div>
                    <div className="skilltab">{post.Perk3}</div>
                  </div>

                  <div className="about">Number of Openings</div>
                  <div className="compC">{post.Numberofopenings}</div>
                  <div className="about">Certification(s) Required</div>
                  <div className="skillC">
                    <div className="skilltab">{post.Certification1}</div>
                    <div className="skilltab">{post.Certification2}</div>
                  </div>
                </div>

                <button type="button" id="btn" className="btn-1">
                  Applicants
                </button>

                <div className="button input-box">
                  <button
                    type="submit"
                    id="btn"
                    className="btn-2"
                    onClick={() => deletePost(post._id)}
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Mypost;
