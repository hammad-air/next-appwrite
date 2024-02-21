import { Client, Databases, ID } from "appwrite";

export default function Home() {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("");
  const databases = new Databases(client);

  let a = [
    {
      "title": "Learn Blogging with Next.js",
      "content": "<p>Next.js is a powerful framework for building React applications, including blogs. In this tutorial, you'll learn how to create a blog using Next.js, manage content, and deploy it to production.</p>",
      "slug": "learn-blogging-with-next-js",
      "views": 1000,
      "author": "John Doe",
      "is_published": true
    },
    {
      "title": "Getting Started with VuePress",
      "content": "<p>VuePress is a minimalistic Vue-powered static site generator. This guide will help you get started with VuePress, from installation to deploying your first site.</p>",
      "slug": "getting-started-with-vuepress",
      "views": 800,
      "author": "Jane Smith",
      "is_published": true
    },
    {
      "title": "Mastering Markdown Syntax",
      "content": "<p>Markdown is a lightweight markup language with plain-text formatting syntax. In this comprehensive guide, you'll learn everything you need to know to master Markdown syntax and enhance your writing skills.</p>",
      "slug": "mastering-markdown-syntax",
      "views": 1200,
      "author": "Alice Johnson",
      "is_published": true
    },
    {
      "title": "Deploying Node.js Applications with Docker",
      "content": "<p>Docker is a popular platform for packaging, deploying, and managing containerized applications. This tutorial will walk you through the process of deploying your Node.js applications with Docker containers.</p>",
      "slug": "deploying-nodejs-applications-with-docker",
      "views": 1500,
      "author": "Bob Williams",
      "is_published": true
    },
    {
      "title": "Introduction to GraphQL",
      "content": "<p>GraphQL is a query language for your API and runtime for executing those queries by using a type system you define for your data. This introduction provides an overview of GraphQL and its core concepts.</p>",
      "slug": "introduction-to-graphql",
      "views": 2000,
      "author": "David Brown",
      "is_published": true
    },
    {
      "title": "Building RESTful APIs with Express.js",
      "content": "<p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. Learn how to build RESTful APIs with Express.js in this tutorial.</p>",
      "slug": "building-restful-apis-with-express-js",
      "views": 1800,
      "author": "Emily Davis",
      "is_published": true
    },
    {
      "title": "Understanding React Hooks",
      "content": "<p>React Hooks are functions that let you use state and other React features without writing a class. This guide provides a comprehensive understanding of React Hooks and how to use them in your projects.</p>",
      "slug": "understanding-react-hooks",
      "views": 2200,
      "author": "Michael Clark",
      "is_published": true
    },
    {
      "title": "Diving Deep into Python's Generators",
      "content": "<p>Generators in Python are a simple and powerful tool for creating iterators. This tutorial dives deep into Python's generators, covering their usage, benefits, and practical examples.</p>",
      "slug": "diving-deep-into-pythons-generators",
      "views": 1700,
      "author": "Samantha White",
      "is_published": true
    },
    {
      "title": "Scaling Your Web Application with AWS Lambda",
      "content": "<p>AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. Learn how to scale your web application with AWS Lambda and other AWS services in this tutorial.</p>",
      "slug": "scaling-your-web-application-with-aws-lambda",
      "views": 2500,
      "author": "Andrew Wilson",
      "is_published": true
    },
    {
      "title": "Optimizing Frontend Performance with Webpack",
      "content": "<p>Webpack is a module bundler for modern JavaScript applications. Discover techniques and best practices for optimizing frontend performance using Webpack in this comprehensive guide.</p>",
      "slug": "optimizing-frontend-performance-with-webpack",
      "views": 1900,
      "author": "Jessica Taylor",
      "is_published": true
    }
  ]

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    
  

  const promise = databases.createDocument(
    "65cd41e3a8565db4d05e",
    "65cd41ed2f965647e101",
    ID.unique(),

 element
  );
  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
} 
  // <-- Closing parenthesis and semicolon added
  return (
    <>
      Navbar here
      <div>Hammad Sheikh</div>
    </>
  );
}
