import { courseVideo } from "../shared/data/courseData";

const Course = () => {
  return (
    <>
      <div className="space-y-4 md:my-12 my-6">
        <h1 className="text-center text-4xl capitalize">course video</h1>
        <hr className="w-40 border border-gray-900 rounded-full mx-auto " />
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:px-12 px-6 my-10">
        {courseVideo?.map((course, index) => {
          const videoId = course?.videoLink.split("v=")[1];
          return (
            <div
              key={index}
              className="bg-neutral py-6 px-3 rounded-lg space-y-7"
            >
              <iframe
                title={course?.name}
                src={`https://www.youtube.com/embed/${videoId}`}
                className="rounded-lg w-full"
                allowFullScreen
              />
              <h1 className="text-md uppercase font-semibold text-gray-700 hover:text-primary">
                {course?.name}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Course;
