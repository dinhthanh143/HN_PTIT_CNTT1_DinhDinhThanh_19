import React, { useEffect, useRef } from "react";

export const Ex7 = () => {
  const target = useRef<HTMLDivElement>(null);
 
    const handler = ()=>{
        target.current?.scrollIntoView({
            behavior: "smooth"
        })
    }

    
  return (
    <div >
      <h1 ref={target} >Scroll to here </h1>
        <div style={{ width: "100%",}}>
            <span style={{ height: "100vh",}} >
                context
            </span>
             <button
        onClick={handler}
        style={{
          color: "white",
          width: "40%",
          padding: "2%",
          border: "none",
          borderRadius: "3px",
          backgroundColor: "rgb(2, 123, 254)",
          marginTop: "4%",
        }}>
        Scroll
      </button>
        </div>
    </div>
  );
};
