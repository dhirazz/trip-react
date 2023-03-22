import img1 from "../images/Manali.jpeg";
import img2 from "../images/Chilika.jpeg";
import img3 from "../images/Devi.webp";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "saving money",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "endless hiking",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    title: "amazing comfort",
  },
];

export const tours = [
  {
    id: 1,
    image: img1,
    date: "november 26th, 2021",
    title: "Manali Adventure",
    info: "Manali-the veritable 'valley of the Gods'-is an ideal place for the ones in search of both adventure and comfort.",
    location: "Himachal, India",
    duration: 7,
    cost: 15000,
  },
  {
    id: 2,
    image: img2,
    date: "december 26th, 2022",
    title: "Chilika Lake",
    info: "Chilika Lake is the largest brackish water lake with estuarine character that sprawls along the east coast of India. ",
    location: "Odisha, India",
    duration: 4,
    cost: 5000,
  },
  {
    id: 3,
    image: img3,
    date: "March 4th, 2023",
    title: "Vaishno Devi",
    info: "Vaishno Devi is believed to be the bestower of strength to the weak, sight to the blind, wealth to the poor and bless childless couples with children.",
    location: "jammu, India",
    duration: 7,
    cost: 10000,
  },
  //   {
  //     id: 4,
  //     image: img4,
  //     date: "December 26th, 2022",
  //     title: "kenya highlights",
  //     info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quo exercitationem fugit, qui corporis.",
  //     location: "kenya",
  //     duration: 8,
  //     cost: 1200,
  //   },
];
