import { BsCartFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { courseData } from "../../shared/data/courseData";
import { useStateContext } from "../../contexts/contextProvider";
import { useNavigate } from "react-router-dom";
import React from "react";
const OnlineCourse = () => {
  const { setCartItem } = useStateContext();
  const [bookmark, setBookmark] = React.useState([]);
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleAddToCart = (index, item) => {
    setCartItem((prevCartItems) => [...prevCartItems, item]);
  };

  const handleBookMark = (item) => {
    const bookmarkExists = bookmark.some((bookmark) => bookmark.id === item.id);

    if (bookmarkExists) {
      const updatedBookmarks = bookmark.filter(
        (bookmark) => bookmark.id !== item.id
      );
      setBookmark(updatedBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    } else {
      const updatedBookmarks = [...bookmark, item];
      setBookmark(updatedBookmarks);
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    }
  };

  return (
    <>
      <div className="space-y-4 md:my-12 my-6">
        <h1 className="text-center text-4xl capitalize">
          most trending online courses
        </h1>
        <hr className="w-40 border border-gray-900 rounded-full mx-auto " />
      </div>
      {/*----- card ------*/}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-y-64 sm:gap-y-72 gap-y-64 gap-x-8">
        {courseData.map((item, index) => {
          return (
            <div key={index} className="relative group">
              <img src={item.image} alt="Image" className="rounded-lg" />
              {email ? (
                <BsBookmark
                  onClick={() => handleBookMark(item)}
                  className={`absolute right-3 top-4 w-7 h-7 p-1 bg-neutral text-md rounded-md hover:bg-primary hover:text-neutral text-primary duration-500 cursor-pointer ${
                    bookmark.includes(item) ? "bg-secondary text-neutral" : ""
                  }`}
                />
              ) : (
                <BsBookmark
                  onClick={() => navigate("/login")}
                  className="absolute right-3 top-4 w-7 h-7 p-1 bg-neutral text-md rounded-md hover:bg-primary hover:text-neutral text-primary duration-500 cursor-pointer"
                />
              )}
              <div className="bg-neutral rounded-lg py-4 mx-7 space-y-3 absolute lg:top-28 sm:top-20 top-36 shadow-xl group-hover:-translate-y-2 group-hover:scale-100 duration-500">
                <div className="px-6 py-3 space-y-2">
                  <AiOutlineStar className="text-[#F4C16C] text-xl" />
                  <h1 className="text-2xl text-gray-700 font-semibold capitalize hover:text-primary duration-500">
                    {item?.name}
                  </h1>
                  <div className="flex gap-2 items-center">
                    <h2 className="bg-primary text-neutral text-xl font-semibold flex justify-center items-center rounded-full w-10 h-10">
                      ic
                    </h2>
                    <span className=" text-lg text-gray-700 font-semibold hover:text-primary duration-500">
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
                  <div
                    onClick={() => handleAddToCart(index, item)}
                    className="flex justify-end gap-2 items-center text-primary text-lg font-bold hover:text-gray-700 duration-500 cursor-pointer"
                  >
                    <BsCartFill color="primary" />
                    Add to Cart
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OnlineCourse;
