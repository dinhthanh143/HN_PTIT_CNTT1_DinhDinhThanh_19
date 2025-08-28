import React, { useState } from "react";

export const Ex5 = () => {
  const [quote] = useState([
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
  ]);
  const [randomQuote,setRandomQuote] = useState("")
  const fetchQuote = ()=>{
    const randomIndex = Math.floor(Math.random()*quote.length)
    setRandomQuote(quote[randomIndex])
  }
  return (
    <div style={{minWidth:"30%"}}>
      <h3>🧠Cau noi truyen cam hung hom nay</h3>
      <span>"{randomQuote}"</span>
      <button
        onClick={fetchQuote}
        style={{
          color: "white",
          width: "40%",
          padding: "2%",
          border: "none",
          borderRadius: "3px",
          backgroundColor: "rgb(2, 123, 254)",
          marginTop:"4%"
        }}>
        Renew
      </button>
    </div>
  );
};
