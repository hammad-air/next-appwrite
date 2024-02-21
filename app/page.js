"use client"
import { Client, Databases, ID } from "appwrite";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import BlogPost from "@/components/BlogCard";

export default function Home() {
  
  function extractFirst100Chars(htmlString) {
    // Strip HTML tags from the string
    const strippedString = htmlString.replace(/<[^>]*>/g, '');
    
    // Extract the first 100 characters
    const first100Chars = strippedString.substring(0, 100);
    
    // Check if the original string length is greater than 100
    if (strippedString.length > 100) {
      // Append ... to indicate truncated content
      return first100Chars + '...';
    } else {
      // If the original string length is 100 characters or less, return the original string
      return first100Chars;
    }
  }
  const client = new Client();

  const [blogs, setBlogs] = useState([]);

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65cc08f2ab0d791f531e");
  const databases = new Databases(client);

  let promise = databases.listDocuments(
    "65cd41e3a8565db4d05e",
    "65cd41ed2f965647e101", 
    []
  );

  promise.then((res) => {
    setBlogs(res.documents);
  });
 // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
     <center> <h1 className="text-3xl font-bold mb-6">Latest Blog</h1></center>
        <div className="">
          {blogs.length === 0 && "Loading...!"}
          {blogs.map((blog, index) => (
            <BlogPost key={index} {...blog} metaDesc= {extractFirst100Chars(blog.content)} />
          ))}
        </div>
      </div>
    </>
  );
}
