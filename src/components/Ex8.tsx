import React, { useCallback, useEffect, useReducer, useState } from "react";
type InputType = {
  username: string;
  password: string;
};

type ActionType =
  | { type: "Loading" }
  | { type: "Error" }
  | { type: "Success" }
  | { type: "Reset" };

const reducer = (state: string, action: ActionType) => {
  switch (action.type) {
    case "Loading":
      return action.type;
    case "Success":
      return action.type;
    case "Error":
      return action.type;
    case "Reset":
      return "";
    default:
      return state;
  }
};

export const Ex8 = () => {
  const [input, setInput] = useState<InputType>({
    username: "",
    password: "",
  });

  const [inputTemp, setInputTemp] = useState<InputType>({
    username: "",
    password: "",
  });

  const [validation, dispatch] = useReducer(reducer, "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputTemp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch({ type: "Loading" });
    setTimeout(() => {
      if (inputTemp.username === "" || inputTemp.password === "") {
        dispatch({ type: "Error" });
      } else {
        dispatch({ type: "Success" });
      }
    }, 2000);
    setTimeout(() => {
      dispatch({ type: "Reset" });
    },5000);
  };

  return (
    <div style={{ gap: "10px" }}>
      <h2>👤 Dang nhap</h2>

      <input
        type="text"
        placeholder="nhap email"
        value={inputTemp.username}
        onChange={handleChange}
        name="username"
        style={{ padding: "2%", borderRadius: "3px" }}
      />

      <input
        type="password"
        placeholder="nhap mat khau"
        value={inputTemp.password}
        onChange={handleChange}
        name="password"
        style={{ padding: "2%", borderRadius: "3px" }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          color: "white",
          backgroundColor: "rgb(2, 123, 254)",
          padding: "2%",
          border: "none",
          borderRadius: "3px",
        }}>
        Submit
      </button>
      {validation === "Loading" ? (
        <p>⌛ loading</p>
      ) : validation === "Success" ? (
        <p style={{ color: "green" }}>✅ Dang nhap thanh cong</p>
      ) : validation === "Error" ? (
        <p style={{ color: "green" }}>❌ Dang nhap that bai</p>
      ) : (
        ""
      )}
    </div>
  );
};
