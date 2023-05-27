import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [pass, setPass] = useState(localStorage.getItem("pass") || "");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && pass) {
      localStorage.setItem("email", email);
      localStorage.setItem("pass", pass);
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("pass")) {
      setLoggedIn(true);
    }
  }, []);

  if (loggedIn) {
    // Redirect the user to the homepage or another authenticated route
    return navigate("/");
  }
  return (
    <>
      <div className="bg-blue-100/5 h-screen flex justify-center items-center">
        <div className="flex-col flex ml-auto mr-auto justify-center items-center w-full lg:w-2/3 md:w-3/5 bg-primary py-12 rounded-lg shadow-lg">
          <h1 className="font-bold text-3xl pb-3 text-neutral">Please Login</h1>
          <form
            onSubmit={handleLogin}
            className="mt-2 flex flex-col lg:w-1/2 w-8/12"
          >
            <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10">
              <div className="flex -mr-px justify-center w-15 p-4">
                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <MdOutlineEmail />
                </span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-4">
              <div className="flex -mr-px justify-center w-15 p-4">
                <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                  <FaLock />
                </span>
              </div>
              <input
                type="password"
                className="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-secondary py-4 text-center px-17 md:px-12 md:py-4 text-white rounded-full leading-tight text-xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
