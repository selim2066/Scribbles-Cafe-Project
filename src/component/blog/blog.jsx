import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  return (
    <div>
     <div className="py-10">
         <img src={blog.banner_img} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <img className="h-15 rounded-full" src={blog.avatar_img} alt="" />
         <div>
             <h3 className="text-[24px] font-bold">{blog.name}</h3>
          <p className="text-[16px] font-semibold">{blog.posted_date}</p>
         </div>
        </div>
        <div className="flex gap-3">
          <p>{blog.reading_time} min read</p>
          <lord-icon
            src="https://cdn.lordicon.com/qvlwoymy.json"
            trigger="hover"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
        </div>
      </div>
      {/* heading */}
      <div>
        <h3 className="text-[40px]">{blog.header_name}</h3>
        <p className="text-[20px] font-light">{blog.hashtags}</p>
        <a href="" className="font-light text-blue-500">Mark as read</a>
      </div>
     </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
