import axios from "axios";
import React, { useState } from "react";

const PersonAdd = () => {
  const [name, setName] = useState({ name: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = {
      name: name,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", { user })
      .then((res) => {
        console.log(res, res.data);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName({ name: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Person Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="relative rounded px-5 py-2.5 overflow-hidden border-solid border-green-900 border-2 text-gray-500 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        ></input>
      </label>
      <button
        type="submit"
        className="relative rounded px-5 py-2.5 overflow-hidden bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default PersonAdd;
