import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

const Success = () => {
  const {state} = useLocation();
  const {stripeData, products} = state
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = stripeData
  const cart = products
  console.log(data)
  console.log(cart)
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("current User:")
  console.log(currentUser)
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
        console.log("uslo u createOrder")
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        console.log("UNUTAR RES")
        console.log(res)
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successful. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;