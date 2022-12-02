import { useState, useEffect } from "react";
import BlogList from "./BlogList";

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
      author: " Dan",
      id: 2,
    },
    {
      title: "web dev top tips",
      body: "Lorem ipsum",
      author: "Danio",
      id: 3,
    },
  ]);

  const [name, setName] = useState("Danio san");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Dan")}
        title="Dan Blogs !"
      />
      <p>{name}</p>
      <button onClick={() => setName("Mfala")}>Change name</button>
    </div>
  );
};

export default Home;
