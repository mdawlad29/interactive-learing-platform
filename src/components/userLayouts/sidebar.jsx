import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import userLogo from "../../../public/assets/images/IC-logo-Telda.webp";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="shadow-lg rounded-lg py-10 px-4">
        <img
          src={userLogo}
          className="w-12 h-12 rounded-full m-auto mb-5 border border-primary"
          alt=""
        />
        <ul className="space-y-5">
          <Link
            to="/profile"
            className="flex justify-center gap-3 items-center bg-blue-300 py-2 rounded-xl text-neutral"
          >
            <FaUserCircle />
            <span>Profile</span>
          </Link>
          <Link
            to="/bookmark"
            className="flex justify-center gap-3 items-center bg-blue-300 py-2 rounded-xl text-neutral"
          >
            <BsFillBookmarkFill />
            <span>Bookmark</span>
          </Link>
        </ul>
        <div className="mt-10 text-center">
          <Link to="/" className="text-red-400 hover:text-secondary">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
