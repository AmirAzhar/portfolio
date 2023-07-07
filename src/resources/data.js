import recyclesgThumbnail from "./images/recycleSG.png";
import recyclesg1 from "./images/R1.png";
import recyclesg2 from "./images/R2.png";
import recyclesg3 from "./images/R3.png";
import recyclesg4 from "./images/R4.png";

import hallbookerThumbnail from "./images/hallBooker.png";
import hallbooker1 from "./images/H1.png";

import dashboardThumbnail from "./images/dashboardThumbnail.png";
import dashboard1 from "./images/dashboard1.png";
import dashboard2 from "./images/dashboard2.png";
import dashboard3 from "./images/dashboard3.png";
import dashboard4 from "./images/dashboard4.png";

import alexThumbnail from "./images/alex.png";
import alex1 from "./images/A1.gif";
import alex2 from "./images/A2.gif";

const projects = [
  {
    title: "DanceDance Dashboard",
    thumbnail: dashboardThumbnail,
    alt: "DanceDance Dashboard",
    body1:
      "The DanceDance Dashboard is a full stack web application used to stream real-time data and analytics of dancers wearing wearables.",
    body2:
      "The Dashboard is one of the 6 components in the CG4002 Capstone project. It is a full stack web application that utilises the MERN tech stack (MongoDB, Express, React and Node). This web application serves as a user interface for dancers using our application. The core component of this web application is to display real time data received directly from the dancers' sensors. The web application is run locally and not delpoyed not any hosting websites.",
    subtitle: "Aug 2021 - Nov 2021",
    contentImages: [
      { id: 1, link: dashboard1 },
      { id: 2, link: dashboard2 },
      { id: 3, link: dashboard3 },
      { id: 4, link: dashboard4 },
    ],
  },
  {
    title: "Alex RTOS Bot",
    thumbnail: alexThumbnail,
    alt: "Alex RTOS Bot",
    body1:
      "Alex RTOS Bot is an Realtime Operating System (RTOS) bot built for competitive races.",
    body2:
      "The bot uses the FRDM-KL25Z board and utilises many other concepts such as scheduling, communication and interrupts. The bot's movement can be controlled by an Android app and can also execute LEDs and play sounds based on the bot's state. Alex RTOS Bot was built by Lee Raiyan Zulkifli, Aarushi and myself, as part of NUS School of Computing module, CG2271 (Real-Time Operating Systems).",
    subtitle: "Jan 2020 - Feb 2020",
    contentImages: [
      { id: 1, link: alex1 },
      { id: 2, link: alex2 },
    ],
  },
  {
    title: "HallBooker",
    thumbnail: hallbookerThumbnail,
    alt: "Hallbooker",
    body1:
      "HallBooker is a desktop management system that aims to aid NUS hall admins handle all their hall facility booking needs, efficiently and effortlessly. ",
    body2:
      "Not only does it allow to keep track of bookings, admins will have the ability to view the layout, capacity and inventory of the facilities. HallBooker was developed with my group consisting of Amos Chan Zhi Zheng, Alex Teo Kang Jie, Cheng Wanyin and Chang Zhong Kai as part of NUS School of Computing module, CS2113T (Software Engineering and Object-Oriented Programming).",
    subtitle: "Aug 2019 - Dec 2019",
    contentImages: [{ id: 1, link: hallbooker1 }],
  },
  {
    title: "RecycleSG ",
    thumbnail: recyclesgThumbnail,
    alt: "RecycleSG",
    body1:
      "RecycleSG is an Android application that aims to be an all encompassing recycling app that encourages regular recycling efforts.",
    body2:
      "RecycleSG aims to be the app every Singaporean looks for when in need of any information concerning recycling. RecycleSG was developed by Lee Raiyan Zulkifli and I, as part of NUS School of Computing module, CP2106 (Independent Software Development Project). Our group was eventually nominated for the Judge's Choice Award. Sadly the application is not available in stores.",
    subtitle: "May 2019 - Aug 2019",
    contentImages: [
      { id: 1, link: recyclesg1 },
      { id: 2, link: recyclesg2 },
      { id: 3, link: recyclesg3 },
      { id: 4, link: recyclesg4 },
    ],
  },
];

export { projects };
