import recyclesgThumbnail from "./recycleSG.png";
import recyclesg1 from "./R1.png";
import recyclesg2 from "./R2.png";
import recyclesg3 from "./R3.png";
import recyclesg4 from "./R4.png";

import hallbookerThumbnail from "./hallBooker.png";
import hallbooker1 from "./H1.png";

import learnitThumbnail from "./learnit.png";
import learnit1 from "./L1.png";

import alexThumbnail from "./alex.png";
import alex1 from "./A1.gif";
import alex2 from "./A2.gif";

const projects = [
  {
    title: "Learn it Like Beckham",
    thumbnail: learnitThumbnail,
    alt: "Learn it Like Beckham",
    body1:
      "Learn in Like Beckham is a Machine Learning model that forecasts goal difference of football matches by utilising pre-match metrics",
    body2:
      "It can be used in various football applications such as data-based coaching or match fixing detection. This model was developed by Lee Raiyan Zulkifli, Liu Shuyang, Saw Lin Min, Quek Wei Ping, Yan Boshen and I, as part of NUS School of Computing module, CS3244 (Machine Learning).",
    subtitle: "Aug 2020 - Nov 2020",
    contentImages: [{ id: 1, link: learnit1 }],
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

const experience = [
  {
    color: "rgb(33, 150, 243)",
    title: "Vehicle Security Intern",
    subtitle: "Huawei",
    date: "Jan 2021 - Present",
    extra: "Skills:",
    body: "Developed Rule-based Network Intrusion Detection System (NIDS) for connected and autonomous cars and implementation of IDS onto microcontrollers, using libraries such as FreeRTOS.",
    skills: [
      "Computer Networks",

      "Information Security",

      "Security and Protection",

      "Network Monitoring",

      "Machine Learning",

      "Embedded Systems",

      "Real-Time Operating Systems",
    ],
  },
  {
    title: "BEng Computer Engineering",
    subtitle: "National University of Singapore",
    date: "Aug 2018 - Present",
    extra: "Notable Modules:",
    body: "Undergraduate in National University of Singapore (NUS), pursuing a Bachelor of Engineering in Computer Engineering (with Honours).",
    skills: [
      "Real-Time Operating Systems (RTOS)",

      "Database Systems",

      "Computer Networks",

      "Information Security",

      "Machine Learning",

      "Artificial Intelligence",

      "Object Oriented Programming (OOP)",
    ],
  },
];

const archiveProjects = [
  {
    year: "NOW",
    title: "ThriftyDrips eCommerce",
    from: "Personal",
    desc: "Currently still in development, a MERN eCommerce site for my personal business venture, Thrifty Drips. Since you're reading this, do give us a follow on Instagram at ",
    link: "https://www.instagram.com/thriftydrips/",
    tech: ["MongoDB", "Node.js", "React.js", "Express.js"],
  },
  {
    year: "2020",
    title: "CareYourPets",
    from: "NUS CS2102",
    desc: "A web based database application for a pet caring service. Application allows pet owners to search for care takers, for their pets. Developed as a group project. Project can be found on github at ",
    link: "https://github.com/CareYourPets/CS2102_2021_S1_Team9",
    tech: ["PostgreSQL", "Node.js", "React.js"],
  },
  {
    year: "2020",
    title: "AI N-Puzzle Solver",
    from: "NUS CS3243",
    desc: "Solving N-puzzles by utilising simple search algorithms such as BFS, UCS and A*. Developed as a group project.",
    tech: ["AI"],
  },
  {
    year: "2020",
    title: "AI Sudoku Solver",
    from: "NUS CS3243",
    desc: "Solving Sudoku as a constraint satisfaction problem, utilising backtracking search with variable/value ordering heuristics and inference mechanisms. Developed as a group project.",
    tech: ["AI"],
  },
  {
    year: "2020",
    title: "AI Pacman Solver",
    from: "NUS CS3243",
    desc: "Solving the classic Pacman game using reinforcement learning concepts, specifically Q-learing agents. Developed as a group project.",
    tech: ["AI"],
  },
  {
    year: "2019",
    title: "Personal Portfolio v1.0",
    from: "Personal",
    desc: "Personal portfolio made with pure HTML/CSS/JS. Have definitely made significance improvement since then. Can be found at ",
    link: "https://amirazhar.github.io/Portfolio-v1.0/",
    tech: ["HTML", "CSS", "Bootstrap", "JS"],
  },
];

export { projects, experience, archiveProjects };
