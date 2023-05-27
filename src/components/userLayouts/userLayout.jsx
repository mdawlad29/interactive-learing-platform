import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const UserLayout = () => {
  return (
    <>
      <div className="grid lg:grid-cols-12 grid-cols-1 p-3 gap-3 ">
        <div className="col-span-2 w-full bg-gray-100 rounded-lg ">
          <Sidebar />
        </div>
        <div className="col-span-10 w-full bg-gray-100 rounded-lg shadow-lg p-5 pb-24">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
