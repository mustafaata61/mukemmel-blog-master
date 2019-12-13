import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Script } from "vm";

const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <Link href="/index">
        <img src="/Logo.png" alt="Logo" className="logo"/>      
      </Link>
      <Link href="/index">
        <h1 className="hero-title">M. Ata</h1>
      </Link>           
      <div className="topnav">
        <a className="active" href="/index">Blog</a>
        <a href="/iletisim">İletişim</a>
        <a href="/hakkimda">Hakkımda</a>
      </div>    
    </div>

    <div className="blog">
      <img src={post.image} alt="Logo" className="resim"/>  
      <h2 className="blog-title">
          <a className="blog-title-link">{post.title}</a>
      </h2>
      <div className="blog-text">
        <ReactMarkdown source={post.details} />
      </div>
      <div className="blog-date">{post.date}</div>
    </div>
    <style jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');  
      .container {
        width: 100%;
        max-width: 650px;
        max-height: 1900px;
        margin: 0 auto;         
        font-family: 'Open Sans', sans-serif;
             
      }

      .hero {
        text-align: center;        
        margin: 0 auto;
      }

      .hero-title {
        font-size: 48px;       
        text-align: center;
        color: #F28444;
        background-color: #FFD199;
        font-family: 'Montserrat',sans-serif; 
      }

      .blog{
        border: 2px solid #F28444;
        margin: 10px
        height; 1000px;
        max-height; 1000px;
      }

      .blog-date {
        text-align: right;
        color: #4D4B4B;
        margin: 12px 0 48px 0;
      }

      a {
        color: #0D0D0D;
        text-decoration: none;
      }

      .blog-title , .blog-text , .blog-date{
        margin: 10px;
      }
      
      .topnav {
        overflow: hidden;
        background-color: #333;
        margin: 0px 0 20px 0;
      }
      
      .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
      
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
      
      .topnav a.active {
        background-color: #F28444;
        color: white;
      }
      .logo{
        height: 250px; 
        weight: 250px;
      }
      .resim{
        padding:10px;
        height: 100px; 
        weight: 100px;
        float: left;
      }
    `}</style>
    
  </div>
);


BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
