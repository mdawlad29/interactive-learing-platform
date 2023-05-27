import image from "../../public/assets/images/IC-logo-Telda.webp";
const Profile = () => {
  return (
    <>
      <div className="flex gap-16 items-center">
        <img src={image} className="w-40 h-16 rounded-xl" alt="" />
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-6">
            <h1 className="font-semibold">Student ID</h1>
            <h1>:</h1>
            <h1>34234</h1>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <h1 className="font-semibold">Full Name</h1>
            <h1>:</h1>
            <h1>MD. Awlad</h1>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <h1 className="font-semibold">Email</h1>
            <h1>:</h1>
            <h1>34234</h1>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <h1 className="font-semibold">Phone</h1>
            <h1>:</h1>
            <h1>123456789</h1>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <h1 className="font-semibold">Address</h1>
            <h1>:</h1>
            <h1>Sector-12, Uttara, Dhaka-1230</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
