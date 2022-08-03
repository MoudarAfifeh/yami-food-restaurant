import React from "react";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({ item, findTotal }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const dispatchCart = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };
  const updateQty = (action, id) => {
    let newCartItems = [];
    if (action === "add") {
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
        newCartItems = cartItems;
      });
    } else {
      if (item.qty === 1) {
        let arr = cartItems.filter((item) => item.id !== id);
        newCartItems = arr;
      } else {
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
          }
        });
        newCartItems = cartItems;
      }
    }
    dispatchCart(newCartItems);
    findTotal(newCartItems);
  };
  return (
    <div className=" w-full p-1 px-2 rounded-md bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL}
        alt="item image"
        className=" w-20 h-20 max-w-[60px] rounded-full object-contain"
      />
      {/* name section */}
      <div className=" flex flex-col gap-2">
        <p className=" text-base text-gray-50 ">{item.title}</p>
        <p className=" text-sm block text-gray-300 font-semibold">
          $ {parseFloat(item?.price) * item.qty}
        </p>
      </div>
      {/* button section */}
      <div className=" group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus className=" text-gray-50" />
        </motion.div>
        <p
          className=" w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex 
              items-center justify-center"
        >
          {item.qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className=" text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
