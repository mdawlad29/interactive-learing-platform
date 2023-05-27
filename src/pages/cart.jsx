import CartDetails from "../components/cartDetails/cartDetails";

const Cart = () => {
  return (
    <div className="md:px-12 px-6 md:py-20 py-12">
      <h1 className="text-center text-3xl font-semibold">My Course</h1>
      <CartDetails />
    </div>
  );
};

export default Cart;
