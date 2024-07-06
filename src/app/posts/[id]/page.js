import React from "react";
import Link from "next/link";
const DetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  console.log(post);

  return (
    <div className="">
      <h1>DetailsPage</h1>

      <div className="flex justify-center items-center h-screen">
        <div key={post.id} className="border p-4 rounded-md shadow-xl max-w-md">
          <h2 className="font-bold text-xl text-red-600">{post.title}</h2>
          <p className="text-gray-700">{post.description}</p>
          <div className="flex justify-center items-center">
            {" "}
            <button className=" shadow-2xl mr-3 text-red-600 my-3 font-bold bg-gray-200 text-center py-1 px-3 rounded-sm max-w-md">
              Likes: {post.likesCount}
            </button>
            <button className=" shadow-2xl mr-3 text-red-600 my-3 font-bold bg-gray-200 text-center py-1 px-3 rounded-sm max-w-md">
              <Link href="/posts">Back To Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
