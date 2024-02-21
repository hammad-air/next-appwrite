"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import { useState } from 'react'
import { Client, Databases, ID, Query } from "appwrite";


export default function Page({ params }) {
    // const [blog, setblog] = useState()
    const client = new Client();
    const [blogs, setBlogs] = useState([]);

    client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("65cc08f2ab0d791f531e");
    const databases = new Databases(client);

    let promise = databases.listDocuments(
        "65cd41e3a8565db4d05e",
        "65cd41ed2f965647e101",
        [
            Query.equal('slug', params.slug)
        ]
    );

    promise.then((res) => {
        setBlogs(res.documents[0]);
    });
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8">
    <center> <h1 className="text-3xl font-bold mb-2">{blogs?.title}</h1></center>
    <div className="text-center"> {/* Apply text-center class to center-align content */}
        {!blogs && "Loading...!"}
        <div className='pr-2'>Author: {blogs?.author}</div>
        <div className='pt-3' dangerouslySetInnerHTML={{__html: blogs?.content}}></div>
    </div>
</div>

        </>
    )
}