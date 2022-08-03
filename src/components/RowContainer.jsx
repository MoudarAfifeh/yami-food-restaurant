import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainerRef = useRef();
  const [{ cartItems }, dispatch] = useStateValue();
  const addToCart = (item) => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [...cartItems, item],
    });
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
  };
  useEffect(() => {
    rowContainerRef.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainerRef}
      className={`w-full flex items-center my-12 gap-3 scroll-smooth
            ${
              flag
                ? "overflow-x-scroll scrollbar-none"
                : "overflow-x-hidden flex-wrap justify-center"
            }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className=" w-275 h-[225px] min-w-[275px] md:w-300 md:min-w-[300px] 
              bg-cardOverlay rounded-lg px-2 my-12 backdrop:blur-lg
       hover:drop-shadow-lg flex flex-col items-center justify-between relative"
          >
            <div className=" w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className=" w-44 h-44 -mt-8 drop-shadow-2xl"
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className=" w-8 h-8 rounded-full bg-purple-600 flex items-center
           justify-center cursor-pointer hover:shadow-md"
                onClick={() => addToCart(item)}
              >
                <MdShoppingBasket className=" text-white " />
              </motion.div>
            </div>
            <div className=" w-full flex flex-col items-end justify-end">
              <p className=" text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className=" mt-1 text-sm text-gray-500 ">{item?.calories}</p>
              <div className=" flex items-center gap-8">
                <p className=" text-lg text-headingColor font-semibold">
                  <span className=" text-sm text-purple-400 mr-1">$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className=" w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="NotFound" className=" h-420 " />
          <p className=" test-xl test-headingColor font-semibold">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
