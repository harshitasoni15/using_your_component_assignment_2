import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  const cardStyle = {
    background: "linear-gradient(135deg, #ff9ff3, #f368e0)",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    width: "300px",
    height: "auto",
    color: "white",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  const profileStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "4px solid white",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "15px",
  };

  return (
    <div style={cardStyle}>
      <img src={post.profileImage} alt="Profile" style={profileStyle} />
      <h3>{post.username}</h3>
      <p style={textStyle}>"{post.content}"</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
