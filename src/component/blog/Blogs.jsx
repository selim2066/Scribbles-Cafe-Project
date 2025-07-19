import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
   <div className="border border-amber-900 w-2/3 p-4">
      <h1 className="text-red-500 ">Blogs</h1>
    </div>
  );
};

export default Blogs;
