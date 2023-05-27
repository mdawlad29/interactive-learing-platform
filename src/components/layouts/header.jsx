import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../../../public/assets/images/IC-logo-Telda.webp";
import { GrMenu, GrClose } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/contextProvider";

const Header = () => {
  const { cartItem } = useStateContext();
  const [open, setOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass(
            "fixed top-0 left-0 w-full shadow-md z-20 text-[#000] duration-500"
          )
        : setStickyClass("");
    }
  };

  const navLinks = [
    { name: "home", link: "/" },
    { name: "course", link: "/course" },
    { name: "features", link: "/features" },
  ];
  return (
    <>
      <nav className={`bg-primary ${stickyClass} text-neutral`}>
        <div className="flex items-center font-medium justify-around">
          {/*------ Logo ------*/}
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <Link to="/">
              <img src={mainLogo} alt="logo" className="h-10 object-cover" />
            </Link>
            <div
              className={`text-3xl md:hidden`}
              onClick={() => setOpen(!open)}
            >
              {open ? <GrClose /> : <GrMenu />}
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8">
            {navLinks?.map((link, index) => (
              <li key={index}>
                <Link to={link.link}>{link?.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 items-center">
            <div className="md:block hidden text-md uppercase">
              {email ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("email");
                    localStorage.removeItem("pass");
                    navigate("/login");
                  }}
                  className="text-md uppercase"
                >
                  logout
                </button>
              ) : (
                <Link to="/login">login</Link>
              )}
            </div>
            <Link
              to={`${email ? "/cart" : "/login"}`}
              className="relative md:block hidden"
            >
              <AiOutlineShoppingCart className="text-2xl" />
              <h2 className="flex justify-center items-center w-5 h-5 rounded-full bg-neutral absolute -top-3 -right-4 text-primary text-md">
                {cartItem?.length}
              </h2>
            </Link>
            {email && (
              <Link to="/profile" className="md:block hidden">
                <FaUserCircle className="text-xl" />
              </Link>
            )}
          </div>
          {/* Mobile nav */}
          <div
            className={`
          md:hidden bg-primary text-neutral absolute w-full h-96 top-0 py-24 pl-4 duration-500 ${
            open ? "right-0" : "right-[100%]"
          }
          `}
          >
            <ul className="space-y-4 px-3 text-md uppercase">
              {navLinks?.map((link, index) => (
                <li key={index}>
                  <Link to={link.link}>{link?.name}</Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden block px-3 py-4 text-md uppercase">
              {email ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("email");
                    localStorage.removeItem("pass");
                    navigate("/login");
                  }}
                  className="text-md uppercase"
                >
                  logout
                </button>
              ) : (
                <Link to="/login">login</Link>
              )}
            </div>
            <div className="pl-4 md:hidden block">
              <button className="relative">
                <AiOutlineShoppingCart className="text-2xl" />
                <h2 className="flex justify-center items-center w-5 h-5 rounded-full bg-neutral absolute bottom-3 -right-4 text-primary text-md">
                  {cartItem?.length}
                </h2>
              </button>
              {email && (
                <Link to="/profile">
                  <FaUserCircle className="text-xl mt-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
