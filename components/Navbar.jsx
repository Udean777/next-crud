import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-slate-200 p-3 flex justify-between gap-10 m-auto">
      <Link href="/" className="text-2xl font-bold">
        Udn
      </Link>
      <Link
        href="/addTopic"
        className="text-lg hover:bg-slate-800 hover:text-white p-1 rounded-lg transition ease-in-out"
      >
        Add Topic
      </Link>
    </nav>
  );
}
