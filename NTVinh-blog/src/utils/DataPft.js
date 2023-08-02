// profile icon - react icons import
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { formatDistance } from "date-fns";
import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { FaHamburger, FaHome, FaLaptopCode, FaWifi } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { RiZzzLine } from "react-icons/ri";
import code from "../assets/images/code.gif";
import contextshop from "../assets/images/context-shop.jpg";
import darkmode from "../assets/images/darkmode.png";
import graph from "../assets/images/graph.jpg";
import nodejs from "../assets/images/nodejs.png";
import p1 from "../assets/images/p1.png";
import reacrrsm from "../assets/images/reacrrsm.png";
import react from "../assets/images/react.png";
import reactImg from "../assets/images/reactImg.png";
import reactVflix from "../assets/images/reactVflix.png";
import reactWork from "../assets/images/reactWork.png";
import reactfresh from "../assets/images/reactfresh.png";
import tracker from "../assets/images/tracker.png";
import vinhstagram from "../assets/images/vinhstagram.png";
// import cybersoft from "../assets/workexperience/cybersoft.jpg";
import isb from "../assets/workexperience/isb.jpg";
import ts from "../assets/workexperience/ts.jpeg";
// eslint-disable-next-line import/no-anonymous-default-export

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "NT Vinh Nguyen",
  bio: "my bio is nothinջ_✏️",
  email: "binkool281132442@gmail",
  birthday: "13th October 1997",
  github: "github.com/devntv",
  address: "Ho Chi Minh City",
  phone: "09 86 111 930",
  Follow: "846 people ",
  From: " Thu Dau Mot",
  myWeb: "https://www.vinhblog.xyz/",
  hoverVerification: "is the owner of this website.",
  social: {
    fb: {
      link: "https://www.facebook.com/vinh.nt97/",
      id: "Dinh.nt1097",
      icon: <FacebookIcon />,
    },
    // Instagam:{
    //     link:'https://www.instagram.com/glory.nt97/',
    //     id:'Dinh.nt1097',
    //     icon: <InstagramIcon />
    // },
    linked: {
      link: "https://www.linkedin.com/in/devntv/",
      id: "Dinh.nt1097",
      icon: <LinkedInIcon />,
    },
    github: {
      link: "https://www.github.com/devntv",
      id: "devntv",
      icon: <GitHubIcon />,
    },
  },
  about:
    "👏Hi: Hi: Welcome to my website, at here i will briefly describe myself and projects that I have done.\n\nI am NTVinh, can call me a FrontEnd developer, my daily work is listen music, play game, read book, social , drink coffee with friends,... but also that i spend much time every day for coding, to me it is like a little hobby every time i have free time. I often find solutions and small ideas and then develop them into the finished products so i also gradually improved my web development skills. My future goal is to become a Fullstack Developer, my favorite programming language is JAVASCRIPT because it is really magic. \n\nThank you for reading this.",
  signature: "VinhdZ",
  projects: [
    {
      btntext: "Go to ➜",
      link: "https://vinhstagram.netlify.app/",
      linkgit: "https://github.com/devntv/dinhstagram-react",
      title: "VinhStagram",
      date: "1/6/2021",
      formatdistance: "2020,05,10",
      dateCreate: formatDistance(new Date(2021, 5, 1), new Date()),
      desc: "project used with main technology: react-hook, firebase, tailwind css, dateFns,...",
      descfunction: "A social website like instagram.com. ",
    },
    {
      btntext: "Go to ➜",
      link: "https://devntv.xyz/",
      linkgit: "https://github.com/devntv/vinh-flix",
      title: "VinhFlix",
      develop: "developing",
      date: "23/10/2020",
      formatdistance: "2020,10,23",
      dateCreate: formatDistance(new Date(2020, 9, 23), new Date()),
      desc: "styled-component, fireBase, react-hook, custom with styled-component, react-router-dom, normalize.css,...",
      descfunction: "A website movies like netflix.com. ",
    },
    {
      btntext: "Go to ➜",
      link: "https://devntv.github.io/reactFreshweb/",
      linkgit: "https://github.com/devntv/reactFreshweb",
      title: "Landing page ReactFresh",
      date: "23/09/2020",
      formatdistance: "2020,09,23",
      dateCreate: formatDistance(new Date(2020, 8, 23), new Date()),
      desc: "react hook, router, javascript, styled-component",
      descfunction:
        "A single page application website with html css javascript and reactJS.",
    },
    // {
    //     btntext:'Go to ➜',
    //     link:'https://devntv.github.io/PublishRsm',
    //     linkgit: 'https://github.com/devntv/PublishRsm',
    //     title: 'Project resume',
    //     date:'10/05/2020',
    //     formatdistance: '2020,05,10',
    //     dateCreate: formatDistance(new Date(2020,4,10), new Date()),
    //     desc:'react-hook, react material, react reveal, react-played,...',
    //     descfunction:'A simple portfolio project. '
    // },
    {
      btntext: "Go to Github ",
      link: "https://github.com/devntv",
      title: "ALL Repositories",
      date: "",
      desc: "Other project available at my github.",
      descfunction: "",
    },
  ],

  techs: [
    {
      title: "ISB Vietnam Co,. Limited",
      avatar: isb,
      time: "May 2019 - Jun 2019 · 2 mos",
      desc: "Technical:  .net, c#, WPF,...",
    },
    {
      title: "Freelance developer",
      avatar: react,
      time: "Aug 2019 - Oct 2019 · 3 mos",
      desc: "Technical:  javascript, react, MUI, tailwind, styled-component,...",
    },
    // {
    //   title: "Cybersoft Academy",
    //   avatar: cybersoft,
    //   time: "May 2020 - Nov 2020 · 7 mos",
    // },
    {
      title: "Buymed",
      time: "Present",
      avatar: ts,
      avatarFrameWork: <GiPositionMarker />,
      desc: "Technical:  nextJS, react, MUI, api, zustand, e2e testing. \n\n Flow: Agile scrum, jira management tool,...",
    },
  ],
  ProfileIcon: [
    {
      Live: <FaHome />,
      Location: <MdLocationOn />,
      Follow: <FaWifi />,
    },
  ],
  MyHobbies: [
    {
      title: "Code",
      desc: "90% of coding is fixing bugs. The other 10% is writing bugs",
      stress: "On",
      maxstress: false,
      icon: <FaLaptopCode />,
    },
    {
      title: "Eat",
      desc: "Coffee, red-bull ",
      stress: "Off",
      maxstress: true,
      icon: <FaHamburger />,
    },
    {
      title: "Sleep",
      desc: "4-6 hour ",
      stress: "Off",
      maxstress: true,
      icon: <RiZzzLine />,
    },
    {
      title: "Repeat",
      desc: "Repeat the cycle 😭😭",
      stress: "On",
      maxstress: false,
      icon: <BsArrowRepeat />,
    },
  ],
  mySkills: [
    {
      title: "Base front-End",
      desc: ["HTML", "CSS (...FrameWork)", "JavaScript", "ES6"],
    },
    {
      title: "Framework",
      desc: ["ReactJS (...Library)", "NextJS", "GraphQL"],
    },
    {
      title: "Back-End",
      desc: ["NodeJS (Express)"],
    },
    {
      title: "Other",
      desc: ["Git", "GitHub", "Design"],
    },
  ],
  gitHubProjectLive: [
    {
      tag: "React",
      img: vinhstagram,
      title: "VinhStagram",
      cap: "click to see project ",
      desc: "see it on my github link",
      live: "https://vinhstagram.netlify.app/login",
      link: [
        {
          link: "https://github.com/devntv/dinhstagram-react",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "React",
      img: p1,
      title: "React Todo basic",
      cap: "click to see project ",
      desc: "see it on my github link",

      link: [
        { link: "https://devntv.github.io/todoPlan/", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "React",
      img: darkmode,
      title: "React DarkMode",
      cap: "click to see project ",
      desc: "see it on my github link",

      link: [
        {
          link: "https://github.com/devntv/useDarkMode-Hookcustom",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "React",
      img: tracker,
      title: "React TrackerApp",
      cap: "click to see project",
      desc: "see it on my github link",

      link: [
        { link: "https://github.com/devntv/tracker-App", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "React",
      img: reactWork,
      title: "React Todo work",
      cap: "click to see project ",
      desc: "see it on my github link",

      link: [
        { link: "https://devntv.github.io/TodoWork/", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "React",
      img: reactVflix,
      title: "React VinhFlix movie",
      cap: "click to see project ",
      desc: "see it on my github link",
      live: "https://devntv.xyz/",
      link: [
        { link: "https://github.com/devntv/vinh-flix", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "React",
      img: reacrrsm,
      title: "React Resume",
      cap: "click to see project ",
      desc: "see it on my github link",

      link: [
        { link: "https://devntv.github.io/PublishRsm/", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "React",
      img: reactImg,
      title: "React SeeImage",
      cap: "click to see project ",
      desc: "see it on my github link",
      live: "https://devntv.github.io/seeImages/",
      link: [
        { link: "https://devntv.github.io/seeImages/", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "React",
      img: reactfresh,
      title: "React Fresh",
      cap: "click to see project ",
      desc: "see it on my github link",
      live: "https://devntv.github.io/reactFreshweb/#/",
      link: [
        {
          link: "https://devntv.github.io/reactFreshweb/#/",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "React",
      img: contextshop,
      title: "React Context-shop",
      cap: "click to see project ",
      desc: "see it on my github link",
      link: [
        {
          link: "https://github.com/devntv/context-shop/",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "NodeJS",
      img: nodejs,
      title: "Project Nodejs 1",
      cap: "click to see project Vue",
      desc: "see it on my github link",
      link: [{ link: "https://github.com/devntv", icon: <GitHubIcon /> }],
    },
    {
      tag: "React & GraphQL",
      img: graph,
      title: "Project Nodejs 1",
      cap: "click to see project Vue",
      desc: "see it on my github link",
      link: [{ link: "https://github.com/devntv", icon: <GitHubIcon /> }],
    },
  ],
  Story: [
    {
      name: "NT Vinh Nguyen",
      adminManager: "Admin",
      storyImgBody: code,
      storyTopContent: "Everyday tasks are also equal 😂😂",
      funContent:
        "90% of coding is fixing bugs, the remaining 10% is creating more bugs.",
    },
  ],
};
