import React, { useMemo } from "react";

export const Ex1 = () => {
  const cartItems = [
    { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
    { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
  ];

  const calTotal = useMemo(()=>{
    return cartItems.reduce((sum,curr)=> sum+ (curr.price * curr.quantity),0)
  }, [cartItems])
  return <div>
    <span>Ex1</span>
    <span>Tong don hang: {calTotal.toLocaleString("vi-VN")} VND</span>
  </div>;
};
