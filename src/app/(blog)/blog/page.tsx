import React from "react";

const BlogsPage = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black bg-[size:20px_20px] bg-opacity-15 transition-colors duration-500">
        <div className="absolute inset-0 bg-grad h-[15rem] opacity-50"></div>
      </div>
      <div className="relative w-full">
        <div className="flex min-h-screen flex-col justify-between items-center">
          <div className="z-10 w-full max-w-6xl justify-between text-sm h-full my-16 px-6">
            <div className="text-4xl text-neutral-100 font-bold mb-10">
              Blog
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
