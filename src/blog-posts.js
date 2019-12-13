export const getPosts = () => {
  return [
    {
      title: "Merhaba Ben, Mustafa Ata",
      slug: "merhaba-ben-mustafa-ata",
      image: "/logo.png",
      details: require("./posts/merhaba-ben-mustafa-ata.md").default,
      date: "3 Aralık 2019"
    },
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      image: "/yarisma-resim.jpg",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019"
    },        
  ];
};
