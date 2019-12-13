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
        <a className="active" href="/Oyunlarim">Oyunlarım</a>
        <a href="/iletisim">İletişim</a>
        <a href="/hakkimda">Hakkımda</a>
      </div>    
    </div>

    <div className="Oyun1">
        <img src="/Oyun1.png" alt="Oyun1" className="resim1"/>
        <h2>
          Dark Wars
        </h2>
        <div className="oyun1-text">
        Oyuna başla, ister düşmanlarını öldür ister reklam izle ve para kazan kazandığın paralarla marketten kendine güzel Karakter, Göz ve bandana al. Üstelik bu oyunu indirince Türk Geliştiricilere de destek vermiş olursun. Eğer daha çok destek vermek istiyorsan reklamlara tıklayabilirsin.
        </div>
    </div>
    <br></br>
    <br></br>
    <div className="Oyun2">
        <img src="/Oyun2.png" alt="Oyun2" className="resim2"/>
        <h2 className="oyun2-header">
          Ball The Invaders
        </h2>
        <div className="oyun2-text">
        Topları topla ve en yüksek skoru yap ! Bu maceradan eksik kalma !
        </div>
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
      .resim1{
        height: 200px;
        weight: 200px;
        float: left;
        padding: 10px;
        margin: 20px;
      }
      .resim2{
        height: 170px;
        weight: 170px;
        float: right;
        padding: 10px;
        margin: 20px;
      }
      .oyun2-header{
        font-size:18px;
      }

      .hakkimda{
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
  const res = await fetch("https://mukemmel-blog-benim.herokuapp.com/Oyunlarim");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
