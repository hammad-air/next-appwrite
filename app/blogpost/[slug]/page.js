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
        .setProject("");
    const databases = new Databases(client);

    let promise = databases.listDocuments(
        "",
        "",
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
                <center> <h1 className="text-3xl font-bold mb-6">{blogs?.title}</h1></center>
                <div className="">
                    {!blogs && "Loading...!"}
                    <div className='mb-3 pr-2'>Author :{blogs?.author} </div>
                    <div dangerouslySetInnerHTML={{__html: blogs?.content}}></div>
                </div>
            </div>
        </>
    )
}