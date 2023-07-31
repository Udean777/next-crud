"use client";

import { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      swal({
        title: "Title and description are required",
        icon: "warning",
        button: "Ok",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-96 justify-center m-auto"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic title..."
        className="border-2 rounded-md px-8 py-1"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Topic description..."
        className="border-2 rounded-md px-8 py-1"
      />

      <button
        type="submit"
        className="bg-blue-500 p-2 text-white rounded-md hover:scale-105 transition ease-in-out w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
