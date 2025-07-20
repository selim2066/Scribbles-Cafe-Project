import { useEffect, useState } from "react";
import Blog from "./blog";

const Blogs = ({handleBookmarks}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
   <div className="border border-amber-900 w-2/3 p-4">
      <h1 className="text-red-500 ">Blogs: {blogs.length}</h1>
    {
      blogs.map(blog=>   <Blog blog={blog} handleBookmarks={handleBookmarks}></Blog>)
    }
    </div>
  );
};

export default Blogs;
