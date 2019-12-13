import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="container">    
    <Head>
      <title>Mustafa Ata | Blog</title>
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
        <a href="/index">Blog</a>
        <a href="/Oyunlarim">Oyunlarim</a>
        <a className="active" href="/iletisim">İletişim</a>
        <a href="/hakkimda">Hakkımda</a>
      </div>    
    </div>

    <div className="iletisim">
      <a><strong>Email:</strong> caglayanmustafaata@gmail.com<br></br>
      <strong>Telefon:</strong>  +90-530-263-65-39<br></br>
      </a>

      
    </div>

    <style jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
      .container {
        width: 100%;
        max-width: 650px;
        margin: 0 auto;         
        font-family: 'Open Sans', sans-serif;   
      }

      .iletisim{
        text-align: center;
      }

      .hero {
        text-align: center;        
        margin: 0 auto;
      }
      .logo{
        height: 250px; 
        weight: 250px;
      }

      .hero-title {
        font-size: 48px;       
        text-align: center;
        color: #F28444;
        background-color: #FFD199;
        font-family: 'Montserrat',sans-serif; 
      }      
      a {
        color: #0D0D0D;
        text-decoration: none;
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
        font-size: 15px;
      }
      
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
      
      .topnav a.active {
        background-color: #F28444;
        color: white;
      }
    `}</style>
  </div>  
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("https://mukemmel-blog-benim.herokuapp.com/iletisim");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
