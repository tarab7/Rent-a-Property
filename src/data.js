import img1 from "./images/3d-electric-car-building.jpg";
import img2 from "./images/house-isolated-field.jpg";
import img3 from "./images/road-city.jpg";
import img4 from "./images/small-white-church-building-green-land-surrounded-by-tall-fir-trees.jpg";
import img5 from "./images/5.jpg"
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";
import img13 from "./images/13.jpg";
import img14 from "./images/14.jpg";
import img15 from "./images/15.jpg";
import img16 from "./images/16.jpg";
import img17 from "./images/17.jpg";
import img18 from "./images/18.jpg";
import img19 from "./images/19.jpg";
import img20 from "./images/20.jpg";

const data=[
    {
        key:1,
        name:"Sandey Key",
        address:"Pensacola, United State",
        bedroom:2,
        bathroom:2,
        area:"1204 Sq Ft",
        rent:3670,
        available:'08/25/2023',
        type: "House",
        img:img1
    },
    {
        key:2,
        name:" Connecticut Ave Nw",
        address:"Washington, District Of Columbia, 20008 United States",
        bedroom:2,
        bathroom:2,
        area:"1095 Sq Ft",
        rent:2750,
        available:'09/07/2023',
        type: "House",
        img:img2    
    }
    ,{
        key:3,
        name:"Pamona Ave",
        address:"Miami, Florida, 33133 United States",
        bedroom:3,
        bathroom:5,
        area:"2,330 Sq Ft.",
        rent:1500,
        available:'08/30/2023',
        type: "Villa",
        img:img3
    },
    {
        key:4,
        name:"Sabel Court",
        address:"Vero Beach, Florida, 32963 United States",
        bedroom:2,
        bathroom:1,
        area:"578 Sq Ft.",
        rent:450,
        available:'07/31/2023',
        type: "Farmhouse",
        img:img4
    },
    {
        key:5,
        name:"Columbus-Lancaster",
        address:"Lancaster, Ohio, 43130 United States",
        bedroom:5,
        bathroom:5,
        area:"3.26 Acre(s)",
        rent:4580,
        available:'08/20/2023',
        type: "Villa",
        img:img5
    },
    {
        key:6,
        name:"Hilliard Rome",
        address:"Columbus, Ohio, 43228 United States",
        bedroom:3,
        bathroom:2,
        area:"1.87 Acre(s)",
        rent:3680,
        available:'04/25/2023',
        type: "House",
        img:img6
    },
    {
        key:7,
        name:"N QUEEN STREET ",
        address:"Lancaster, Pennsylvania, 17603 United States",
        bedroom:5,
        bathroom:5,
        area:"0.53 Acre(s)",
        rent:2457,
        available:'05/09/2023',
        type: "House",
        img:img7
    },
    {
        key:8,
        name:"E LANDIS AVENUE",
        address:"Vineland, New Jersey, 08361 United States",
        bedroom:2,
        bathroom:2,
        area:"0.33 Acre(s)",
        rent:1389,
        available:'07/13/2023',
        type: "Farmhouse",
        img:img8
    },
    {
        key:9,
        name:"MILLPORT ROAD",
        address:"Lititz, Pennsylvania, 17543 United States",
        bedroom:3,
        bathroom:2,
        area:"263 Acre(s)",
        rent:560,
        available:'03/20/2023',
        type: "Farmhouse",
        img:img9
    },
    {
        key:10,
        name:"NEW HOLLAND AVENUE",
        address:"Lancaster, Pennsylvania, 17601 United States",
        bedroom:3,
        bathroom:3,
        area:"74.8 Acre(s)",
        rent:4563,
        available:'08/17/2023',
        type: "Villa",
        img:img10
    },
    {
        key:11,
        name:"266 46th Lawrenceville",
        address:"DIVISION HIGHWAY",
        bedroom:3,
        bathroom:5,
        area:"6 Acre(s)",
        rent:5900,
        available:'07/13/2023',
        type: "House",
        img:img11
    }
    ,{
        key:12,
        name:"Mee Lane",
        address:"St. Helena, California, 94574 United States",
        bedroom:3,
        bathroom:2,
        area:"4,084 Sq Ft.",
        rent:1700,
        available:'07/30/2023',
        type: "Flat",
        img:img12
    },
    {
        key:13,
        name:"Oneida Drive",
        address:"Greenwich, Connecticut, 06830 United States",
        bedroom:3,
        bathroom:3,
        area:"2,540 Sq Ft.",
        rent:2000,
        available:'07/01/2023',
        type: "Flat",
        img:img13
    },
    {
        key:14,
        name:"Meadow Wood Drive",
        address:"Greenwich, Connecticut, 06830 United States",
        bedroom:2,
        bathroom:2,
        area:"5,040 Sq Ft.",
        rent:5673,
        available:'04/20/2023',
        type: "Commercial",
        img:img14
    }
    ,{
        key:15,
        name:"Old Ranch Road",
        address:"Laguna Niguel, California, 92677 United States",
        bedroom:6,
        bathroom:4,
        area:"15,188 Sq Ft.",
        rent:6000,
        available:'08/30/2023',
        type: "Commercial",
        img:img15
    },
    {
        key:16,
        name:"2520 Foster Avenue",
        address:"Brooklyn, New York, 11201 United States",
        bedroom:5,
        bathroom:5,
        area:"3700 Sq Ft.",
        rent:4300,
        available:'07/25/2023',
        type: "Villa",
        img:img16
    }
    ,{
        key:17,
        name:"1177 Sumner Ave",
        address:"El Cajon, California, 92021 United States",
        bedroom:4,
        bathroom:2,
        area:"1,800 Sq Ft.",
        rent:2450,
        available:'06/30/2023',
        type: "Villa",
        img:img17
    },
    {
        key:18,
        name:"Dune Road",
        address:"Westhampton Beach, New York, 11978 United States",
        bedroom:4,
        bathroom:3,
        area:"3700 Sq Ft.",
        rent:2000,
        available:'06/31/2023',
        type: "Flat",
        img:img18
    },
    {
        key:19,
        name:"Middle Lane",
        address:"East Hampton, New York, 11937 United States",
        bedroom:2,
        bathroom:1,
        area:"1000 Sq Ft.",
        rent:670,
        available:'04/02/2023',
        type: "Farmhouse",
        img:img19
    },
    ,{
        key:20,
        name:"574 SUMMIT Avenue",
        address:"Jersey City, New Jersey, 07306 United States",
        bedroom:2,
        bathroom:1,
        area:"1200 Sq Ft.",
        rent:890,
        available:'08/14/2023',
        type: "Commercial",
        img:img20
    },
]

export default data;