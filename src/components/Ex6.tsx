import React, { useEffect, useState } from "react";

export const Ex6 = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setKey(e.key);
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler)
    };
  });

  return (
    <div>
      <span>Phim ban vua bam:</span>
      <div style={{ fontSize: "25px", padding: "8px" }}>{key}</div>
    </div>
  );
};
