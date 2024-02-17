"use client"
import { Client, Databases, ID } from "appwrite";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import BlogPost from "@/components/BlogCard";
import { loadBindings } from "next/dist/build/swc";

export default function Home() {
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
 // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Latest Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.length === 0 && "Loading...!"}
          {blogs.map((blog, index) => (
            <BlogPost key={index} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
}
