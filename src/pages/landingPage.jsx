import Hero from "../components/hero";
import OnlineCourse from "../components/onlineCourse/onlineCourse";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <div className="md:px-12 px-6">
        <OnlineCourse />
      </div>
    </>
  );
};

export default LandingPage;
