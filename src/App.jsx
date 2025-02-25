import { useState } from "react";
import PostCard from "./components/postcard";

function App() {
  const posts = [
    {
      id: 1,
      profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      username: "Alice",
      content: "🌟 Dream big and make it happen!",
    },
    {
      id: 2,
      profileImage: "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      username: "Bob",
      content: "🚀 Coding my way to success!",
    },
    {
      id: 3,
      profileImage: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      username: "Charlie",
      content: "🎶 Enjoying life, one moment at a time!",
    },
  ];

  const appStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f4f6",
    minHeight: "100vh", // FULL SCREEN HEIGHT
    width: "100vw", // FULL SCREEN WIDTH
    padding: "20px",
    overflowX: "hidden",
  };

  const titleStyle = {
    fontSize: "32px",
    color: "#ff4757",
    marginBottom: "20px",
    fontWeight: "bold",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    maxWidth: "90%",
  };

  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>🔥 Social Media Feed 🔥</h1>
      <div style={containerStyle}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
