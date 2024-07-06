import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  console.log(posts);
  return (
    <div className="grid grid-cols-3 gap-4 p-4 m-10 ">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow-xl">
          <h2 className="font-bold text-xl text-red-600">{post.title}</h2>
          <p className="text-gray-700">{post.description}</p>
          <p className=" shadow-2xl text-red-600 my-3 font-bold bg-gray-300 text-center p-1 rounded-xl max-w-md">
            Likes: {post.likesCount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default page;
