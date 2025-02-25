import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    transition: "all 0.3s ease-in-out",
    backgroundColor: liked ? "#ff4757" : "#dfe4ea",
    color: liked ? "white" : "#2f3542",
    boxShadow: liked ? "0 4px 10px rgba(255, 71, 87, 0.5)" : "0 2px 5px rgba(0,0,0,0.2)"
  };

  return (
    <button style={buttonStyle} onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
