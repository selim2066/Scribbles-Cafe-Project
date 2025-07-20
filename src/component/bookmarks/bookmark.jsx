const Bookmark = ({ bookmarks }) => {
  return (
    <div className="flex flex-col gap-3 mt-10 rounded-lg bg-cyan-100 p-5">
      {bookmarks.map((title) => (
        <h2 className="bg-amber-500 p-4 rounded-xl text-white font-bold">
          {title}
        </h2>
      ))}
    </div>
  );
};

export default Bookmark;
