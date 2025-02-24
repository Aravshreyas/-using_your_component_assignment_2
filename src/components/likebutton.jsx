import React from 'react'
import { useState } from 'react';
const likebutton = ({initialLiked}) => {
    const [liked, setLiked] = useState(initialLiked);

    return (
      <button
        onClick={() => setLiked(!liked)}
        style={{
          backgroundColor: liked ? "red" : "#ccc",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {liked ? "Liked" : "Like"}
      </button>
    );
}

export default likebutton
