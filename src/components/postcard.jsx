import React from 'react'
import LikeButton from './likebutton'

const postcard = ({ post }) => {
    return (
        <div style={{
          border: "1px solid #ddd",
          padding: "15px",
          margin: "10px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
        }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img 
              src={post.profileImage} 
              alt={post.username} 
              style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
            />
            <h3>{post.username}</h3>
          </div>
          <p>{post.content}</p>
          <LikeButton isLiked={post.isLiked} />
        </div>
      );
    };

export default postcard
