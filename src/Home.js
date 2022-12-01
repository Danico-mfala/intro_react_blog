import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsum",
      author: "Danico san",
      id: 1,
    },
    {
      title: "Welcome party",
      body: "lorem ipsum",
      author: " Danio",
      id: 2,
    },
    {
      title: "web dev top tips",
      body: "Lorem ipsum",
      author: "Dan",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
