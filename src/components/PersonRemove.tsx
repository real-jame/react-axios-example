import React, { useState } from "react";

import API from "../api";

const PersonRemove = () => {
  const [id, setId] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await API.delete(`users/${id}`);

    console.log(res, res.data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-3 grid-flow-col gap-4 bg-gray-200 border-black border-y p-1 my-2"
      >
        <label htmlFor="removeIdInput">Person Id:</label>
        <input
          type="number"
          name="id"
          id="removeIdInput"
          onChange={handleChange}
          className="border-black border rounded-xl px-2 col-span-2"
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-1 rounded-md hover:ring-2 hover:ring-red-700 hover:ring-offset-1 transition-all ease-out"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default PersonRemove;
