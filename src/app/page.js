import React from "react";
import "./globals.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="m-5 text-center">
      <h1 className="text-red-600 text-3xl font-bold">HomePage</h1>
      <div className="my-5">
        <Link
          href="/posts"
          className="shadow-2xl text-red-700 font-bold rounded-md bg-gray-300  p-2"
        >
         Let's see Posts
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
