import React from 'react';
import './Blog.css';  // Ensure you have a CSS file for styling this component

const Blog = () => {
  // Array of video blog entries (assuming using YouTube or similar)
  const videoBlogs = [
    { id: 1, title: "Welcome", url: "https://www.youtube.com/watch?v=D8i4TEGb6tM&list=TLGGK76VIMOQtWIzMTEyMjAyMw&t=2s&ab_channel=Mangala" },
    { id: 2, title: "Summer 2023", url: "https://www.youtube.com/watch?v=MnOegm8gwPU&list=TLGGOAc1aFH5oc4zMTEyMjAyMw&ab_channel=Mangala" },
    // ... add more video blog entries here
  ];

  return (
    <div id="blog" className="blog">
      <h2>Blogs</h2>
      {videoBlogs.map(blog => (
        <div key={blog.id} className="video-blog-entry">
          <h3>{blog.title}</h3>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/"
              title={blog.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;

