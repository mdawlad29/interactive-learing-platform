import { IoMdCloseCircle } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

const Bookmark = () => {
  const [storedBookmark, setStoredBookmark] = React.useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  );

  const removeBookmark = (index) => {
    const updatedBookmarks = storedBookmark.filter((item, i) => i !== index);
    setStoredBookmark(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };
  return (
    <>
      {/*----- card ------*/}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-y-40 sm:gap-y-40 gap-y-24 gap-x-8 ">
        {storedBookmark.map((item, index) => {
          return (
            <Link to="/" key={index}>
              <div className="relative group">
                <img src={item?.image} alt="Image" className="rounded-lg" />
                <div className="bg-neutral rounded-lg py-2 space-y-2 absolute lg:top-12 sm:top-8 top-10 shadow-xl group-hover:-translate-y-2 mx-2 group-hover:scale-100 duration-500">
                  <div className="px-2 py-1">
                    <AiOutlineStar className="text-[#F4C16C] text-xl" />
                    <h1 className="text-lg text-gray-700 font-semibold capitalize">
                      {item?.name}
                    </h1>
                    <div className="flex gap-2 items-center">
                      <h2 className="bg-primary text-neutral text-xl font-semibold flex justify-center items-center rounded-full w-10 h-10">
                        ic
                      </h2>
                      <span className="text-lg text-gray-700 font-semibold">
                        <small className="text-gray-400 pr-1">by</small>
                        Interactive cares
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="px-6">
                    <h2 className="text-xl text-gray-700">
                      <span className="text-3xl">৳</span> {item?.price}
                    </h2>
                    <button
                      onClick={() => removeBookmark(index)}
                      className="flex w-full justify-center gap-2 items-center bg-red-700 text-lg font-bold rounded-2xl text-neutral mt-2"
                    >
                      <IoMdCloseCircle color="primary" />
                      Remove to Bookmark
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Bookmark;
