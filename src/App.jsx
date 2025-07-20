import { useState } from "react";
import "./App.css";
import Header from "./component/header/header";
import Blogs from "./component/blog/Blogs";
import Bookmarks from "./component/bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    const { header_name } = blog;
    const title = [...bookmarks, header_name];
    setBookmarks(title);
  };

  const handleTime = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header></Header>
      <main className="m-10 flex justify-between gap-4">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleTime={handleTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} time={readingTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
