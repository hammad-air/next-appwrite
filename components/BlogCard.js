import React from 'react';
import Link from 'next/link'

const BlogPost = ({ title, author, metaDesc, readMoreLink , slug }) => {
  return (
    <div className="mx-auto overflow-hidden bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 mb-2 text-xs font-bold">Author: {author}</p>
      <p className="text-gray-600 mt-2 mb-4">{metaDesc}</p>

      <Link href={"/blogpost/" + slug} className="mt-4 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Read More
      </Link>
    </div>
  );
}

export default BlogPost;
