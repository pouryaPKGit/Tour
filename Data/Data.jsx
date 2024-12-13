import img1 from "../public/images/Untitled-1.jpg01.jpg"
import img2 from "../public/images/Untitled-1.jpg02.jpg"
import img3 from "../public/images/Untitled-1.jpg03.jpg"
import img4 from "../public/images/Untitled-1.jpg04.jpg"
import img5 from "../public/images/Untitled-1.jpg05.jpg"
import img6 from "../public/images/Untitled-1.jpg07.jpg"
import { LuHotel } from "react-icons/lu";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { LuShip } from "react-icons/lu";
import { IoCarSportOutline } from "react-icons/io5";

import img01 from "..//public/images/Untitled-1.jpg002.jpg"
import img02 from "../public/images/Untitled-1.jpg004.jpg"
import img03 from "../public/images/Untitled-1.jpg003.jpg"
import img04 from "../public/images/Untitled-1.jpg001.jpg"

export const ourPackages = [
    {
        id: 1, 
        title: "Yushin, Singapore",
        price: "370",
        img: img1,
    },
    {
        id: 2, 
        title: "Tokyo, Japan",
        price: "850",
        img: img2,
    },
    {
        id: 3, 
        title: "Semporna, Malaysia",
        price: "1500",
        img: img3,
    },
    {
        id: 4, 
        title: "Beijing, China",
        price: "690",
        img: img4,
    },
    {
        id: 5, 
        title: "Bangkok, Thailand",
        price: "1700",
        img: img5,
    },
    {
        id: 6, 
        title: "Hawaii, USA",
        price: "2000",
        img: img6,
    },
]

export const ourServices = [
    {
        id: 1,
        icon: <LuHotel />,
        title: "Hotel Booking",
       
    },
    {
        id: 2,
        icon: <LiaPlaneDepartureSolid />,
        title: "Flight Booking",
        
    },
    {
        id: 3,
        icon: <LuShip />,
        title: "Ship Booking",
       
    },
    {
        id: 4,
        icon: <IoCarSportOutline />,
        title: "Car Booking",
        
    },
]

export const leaders = [
    {
        id: 1,
        img: img01,
        name: "Rose Roby",
        country: "USA",
    },
    {
        id: 2,
        img: img02,
        name: "Jhon William",
        country: "UK",
    },
    {
        id: 3,
        img: img03,
        name: "Julia Smith",
        country: "China",
    },
    {
        id: 4,
        img: img04,
        name: "Tommy Tyson",
        country: "Italy",

    },
]
export const clientReviews = [
    {
      name: "Liza Doe",
      text:
        "Traveling with a tour group offers a unique and hassle-free way to explore new destinations. It provides the opportunity to discover places you might not have considered visiting on your own while benefiting from the expertise of a knowledgeable guide.",
      profession: "Edusity, USA",
      image: "/images/Untitled-1.jpg212121.jpg",
    },
    {
      name: "Rose Smith",
      text:
        "Traveling with a tour group offers a unique and hassle-free way to explore new destinations. It provides the opportunity to discover places you might not have considered visiting on your own while benefiting from the expertise of a knowledgeable guide.",
      
      profession: "Edusity, UK",
      image: "/images/Untitled-1.jpg003.jpg",
    },
    {
      name: "Michael Johnson",
      text:
        "Traveling with a tour group offers a unique and hassle-free way to explore new destinations. It provides the opportunity to discover places you might not have considered visiting on your own while benefiting from the expertise of a knowledgeable guide.",
      
      profession: "Edusity, USA",
      image: "/images/Untitled-1.jpg1w122.jpg",
    },
    {
      name: "Mike Brown",
      text:
        "Traveling with a tour group offers a unique and hassle-free way to explore new destinations. It provides the opportunity to discover places you might not have considered visiting on your own while benefiting from the expertise of a knowledgeable guide.",
     
      profession: "Edusity, UK",
      image: "/images/Untitled-1.jpg004.jpg",
    },
]