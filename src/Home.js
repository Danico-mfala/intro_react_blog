import { useState } from "react";
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
      <BlogList blogs={blogs} title="All Blogs !" />
    </div>
  );
};

export default Home;
