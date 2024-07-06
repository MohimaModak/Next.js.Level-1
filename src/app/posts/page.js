import Link from "next/link";
import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  console.log(posts);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 m-10 ">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow-xl">
          <h2 className="font-bold text-xl text-red-600">{post.title}</h2>
          <p className="text-gray-700">{post.description}</p>
          <div className="flex justify-center items-center">
            {" "}
            <button className=" shadow-2xl mr-3 text-red-600 my-3 font-bold bg-gray-300 text-center py-1 px-3 rounded-sm max-w-md">
              Likes: {post.likesCount}
            </button>
            <Link href={`/posts/${post.id}`}>
              {" "}
              <button className=" shadow-2xl text-red-600 my-3 font-bold bg-gray-300 text-center py-1 px-3 rounded-sm max-w-md">
                See more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
