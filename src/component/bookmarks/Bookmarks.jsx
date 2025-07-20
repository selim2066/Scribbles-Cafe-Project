import Bookmark from "./bookmark";
const Bookmarks = ({ bookmarks, time }) => {
  return (
    <>
      <div>
        <div className="bg-[#6047EC] text-white p-4 mb-5 rounded-lg">
          <h1>Spent time on read: {time} min</h1>
        </div>
        <div className="border border-amber-900 w-full p-4 bg-slate-100 rounded-lg">
          <h2>Bookmarked Blog:{bookmarks.length} </h2>
          <Bookmark bookmarks={bookmarks}></Bookmark>
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
