import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://interactivecares-courses.com/wp-content/uploads/2021/04/CCP-01-1-768x402.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "60vh",
        backgroundPosition: "center",
      }}
    >
      <div className="relative">
        <div className="absolute top-32 md:left-24 left-16">
          <h4 className="text-5xl font-semibold text-neutral">Enhance Your</h4>
          <h1 className="text-7xl font-semibold text-neutral">Learning</h1>
          <div className="flex items-center gap-5 my-8">
            <h1 className="text-xl text-neutral">Popular</h1>
            <Link to="/gray">
              <button className="border border-neutral px-2 py-0.5 bg-gray-700 text-neutral rounded-md hover:bg-gray-500">
                GRE
              </button>
            </Link>
            <Link to="/ielts">
              <button className="border border-neutral px-2 py-0.5 bg-gray-700 text-neutral rounded-md hover:bg-gray-500">
                IELTS
              </button>
            </Link>
            <Link to="/python">
              <button className="border border-neutral px-2 py-0.5 bg-gray-700 text-neutral rounded-md hover:bg-gray-500">
                Python
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
