import axios from "axios";
import React, { useState } from "react";

import API from "../api";

const PersonAdd = () => {
  const [name, setName] = useState({ name: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = {
      name: name,
    };

    const res = await API.post("users", user);
    console.log(res, res.data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName({ name: event.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-3 grid-flow-col gap-4 bg-gray-200 border-black border-y p-1 my-2"
    >
      <label htmlFor="name">Person Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className="border-black border rounded-xl px-2 col-span-2"
      ></input>
      <button
        type="submit"
        className="bg-green-500 text-white px-1 rounded-md hover:ring-2 hover:ring-green-700 hover:ring-offset-1 transition-all ease-out"
      >
        Add
      </button>
    </form>
  );
};

export default PersonAdd;
