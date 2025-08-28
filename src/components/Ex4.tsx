import React, { useCallback, useEffect, useState } from "react";
type InputType = {
  email: string | null;
  password: string | null;
};
export const Ex4 = () => {
  const [input, setInput] = useState<InputType>({
    email: null,
    password: null,
  });

  const [inputTemp, setInputTemp] = useState<InputType>({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputTemp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(() => {
    if (inputTemp.email === "") {
      return
    }else if (!inputTemp.email?.includes("@") ) {
      return
    }

    if (inputTemp.password === "") {
      return
    }
    setInput({ ...inputTemp });
    alert(`Submit thanh cong`)
  }, [inputTemp]);

  useEffect(() => {
    if (inputTemp.email === "") {
      setError((prev) => ({
        ...prev,
        email: "empty",
      }));
    }else if (!inputTemp.email?.includes("@") ) {
      setError((prev) => ({
        ...prev,
        email: "invalid",
      }));
    }else{
      setError((prev)=>({
        ...prev,
        email: "none"
      }))
    }

    if (inputTemp.password === "") {
      setError((prev) => ({
        ...prev,
        password: "empty",
      }));
    }else{
      setError((prev)=>({
        ...prev,
        password: "none"
      }))
    }


  }, [inputTemp]);

  return (
    <div style={{ gap: "10px" }}>
      <h2>📋 Dang ky thong tin</h2>
      <input
        type="text"
        placeholder="nhap email"
        value={inputTemp.email}
        onChange={handleChange}
        name="email"
      />
      {error.email === "empty" ? (
        <span style={{ fontSize: "13px", color: "red" }}>
          Truong nay la bat buoc
        </span>
      ) : error.email === "invalid" ? (
        <span style={{ fontSize: "13px", color: "red" }}>
          email sai dinh dang
        </span>
      ) : ""
    }

      <input
        type="password"
        placeholder="nhap mat khau"
        value={inputTemp.password}
        onChange={handleChange}
        name="password"
      />

       {error.password === "empty" ? (
        <span style={{ fontSize: "13px", color: "red" }}>
          Truong nay la bat buoc
        </span>
      ) : ""
    }

      <button
        style={{
          width: "50%",
          color: "white",
          backgroundColor: "rgb(2, 123, 254)",
        }}
        onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
