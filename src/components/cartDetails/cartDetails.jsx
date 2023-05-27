import { IoMdCloseCircle } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { useStateContext } from "../../contexts/contextProvider";

const CartDetails = () => {
  const { cartItem, setCartItem } = useStateContext();

  const removeCart = (index) => {
    const updatedItems = cartItem.filter((item, i) => i !== index);
    setCartItem(updatedItems);
  };
  return (
    <>
      {/*----- card ------*/}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-y-72 sm:gap-y-72 gap-y-64 gap-x-8 my-24">
        {cartItem.map((item, index) => {
          return (
            <div key={index} className="relative group">
              <img src={item?.image} alt="Image" className="rounded-lg" />
              <div className="bg-neutral rounded-lg py-4 mx-7 space-y-3 absolute lg:top-28 sm:top-20 top-36 shadow-xl group-hover:-translate-y-2 group-hover:scale-100 duration-500">
                <div className="px-6 py-3 space-y-2">
                  <AiOutlineStar className="text-[#F4C16C] text-xl" />
                  <h1 className="text-2xl text-gray-700 font-semibold capitalize">
                    {item?.name}
                  </h1>
                  <div className="flex gap-2 items-center">
                    <h2 className="bg-primary text-neutral text-xl font-semibold flex justify-center items-center rounded-full w-10 h-10">
                      ic
                    </h2>
                    <span className=" text-lg text-gray-700 font-semibold">
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
                    onClick={() => removeCart(index)}
                    className="flex w-full justify-center gap-2 items-center bg-red-700 text-lg font-bold rounded-2xl text-neutral mt-4"
                  >
                    <IoMdCloseCircle color="primary" />
                    Remove to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartDetails;
