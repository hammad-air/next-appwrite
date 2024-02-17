import React from 'react';

const BlogPost = ({ title, author, metaDesc }) => {
  return (
    <div className="max-w-xl mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">Author: {author}</p>
      <p className="text-gray-600">{metaDesc}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Read More
      </button>
    </div>
  );
}

export default BlogPost;
