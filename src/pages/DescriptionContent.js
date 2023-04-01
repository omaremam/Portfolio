import React from "react";
import { AiFillCloud, AiFillMobile } from "react-icons/ai";
import {
  FaVuejs,
  FaReact,
  FaAngular,
  FaServer,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { DiHeroku } from "react-icons/di";
import { SiFirebase, SiFlutter, SiMongodb, SiMysql } from "react-icons/si";
import providerOne from "../images/allowedServicedCapture.png";
import providerTwo from "../images/claimFull.png";
import providerThree from "../images/claimpage.png";
import providerFour from "../images/settlements.png";
import mobileOne from "../images/mobileFive.png";
import mobileTwo from "../images/mobileTwo.png";
import mobileThree from "../images/mobileThree.png";
import mobileFour from "../images/mobileOne.png";
import mobileFive from "../images/mobileFour.png";
import courzerveMobileOne from "../images/courzerveMobileOne.jpeg";
import thesis from "../images/Thesisfinal.pdf";

export default [
  {
    key: 1,
    text: "My name is Omar Emam, and I am a Software Developer with a degree in Network Engineering. With extensive knowledge of software development, DevOps, UI/UX, and cloud computing, I have successfully built several complex production-level software applications from start to finish. I am committed to designing and implementing quality solutions that meet the needs of clients and end-users. My portfolio demonstrates my proficiency in designing and implementing software systems that are reliable, efficient, and scalable.",
  },
  {
    key: 2,
    title: "Sehatech",
    text: "Sehatech is a medical insurance industry startup operating as an Electronic Third-Party Administrator (e-TPA) for insurance policies. I have successfully built and managed multiple projects, including front-end and back-end development of TPA services, as well as mobile and front-end and back-end development of patient services. Additionally, I have expertise in DevOps deployment of all these services to ensure high-performance and availability for our high-profile clients. My experience at Sehatech demonstrates my ability to develop and implement innovative solutions in the medical industry.",
    components: [
      <a
        className="link-text"
        key={"first"}
        href="https://sehatech.org/"
        target="_blank"
      >
        Website
      </a>,
      <a
        className="link-text"
        key={"second"}
        href="https://play.google.com/store/apps/details?id=com.sehatech.sehatech"
        target="_blank"
      >
        Play store
      </a>,
      <a
        className="link-text"
        key={"third"}
        href="https://apps.apple.com/us/app/sehatech-%D8%B5%D8%AD%D8%A9-%D8%AA%D9%83/id1614708689"
        target="_blank"
      >
        App store
      </a>,
    ],
    moreInformation: {
      title: "Sehatech (Senior Fullstack Developer)",
      stacks: {
        main: [
          {
            typeLogo: <FaServer color="#ccc" size={25} />,
            logo: <FaNodeJs color="green" size={25} />,
          },
          {
            typeLogo: <FaDatabase color="#ccc" size={25} />,
            logo: <SiMysql color="white" size={25} />,
          },
          {
            typeLogo: <RiComputerFill color="#ccc" size={25} />,
            logo: <FaReact color="#7cc5d9" size={25} />,
          },
          {
            typeLogo: <AiFillMobile color="#ccc" size={25} />,
            logo: <SiFlutter color="#42A5F5" size={25} />,
          },
          {
            typeLogo: <AiFillCloud color="#ccc" size={25} />,
            logo: <FaAws color="white" size={25} />,
          },
        ],
      },
      projects: [
        {
          title: "B2C Service",
          description:
            "The B2C service is a service belonging to the Sehatech backend mainly focused on the customer relationship and operations with the health-care providers, the service allows reservation of appointments with health-care providers, issues discounts and employs payment gateways for the customers as well as handling most of the health-care provider app and mobile app operations",
        },
        {
          title: "B2B Service",
          description:
            "The B2B service is a service belonging to the Sehatech backend mainly focused on the medical insurance operations based on its three main pillars. The patient, the health-care provider and the medical insurance companies. This service is a comprehensive management service for all the financial and claim management matters. This service can be deployed for any health insurance company or TPA to digitalize their operations and detect frauds",
        },
        {
          title: "Sehatech Health Care Provider",
          description:
            "The Sehatech health care provider application is a financial application developed for health care providers to submit the medical insurance claims and track and manage all of its operations as well as the internal financial operations",
          images: [providerOne, providerTwo, providerThree, providerFour],
        },
        {
          title: "Sehatech Mobile Application",
          description:
            "The Sehatech mobile application caters to the needs of Sehatech's clientele, predominantly comprising patients seeking healthcare discounts, as well as policyholders who utilize the app to oversee and monitor their insurance policies. This project aims to provide a comprehensive and user-friendly platform for Sehatech customers to access their healthcare benefits and manage their policies efficiently.",
          images: [mobileOne, mobileTwo, mobileThree, mobileFour, mobileFive],
        },
        {
          title: "Sehatech Insurance Company Portal",
          description:
            "The Sehatech insurance company portal is a management enterprises software mainly focused for Medical insurance companies containing features such as Claim management, policy management, customer management, fraud management and internal matters management",
          images: [providerOne, providerTwo, providerThree, providerFour],
        },
        {
          title: "Sehatech Main Website",
          description:
            "This project is the main website and the communication and commercial point for Sehatech",
          images: [providerOne, providerTwo, providerThree, providerFour],
        },
      ],
    },
  },
  {
    key: 3,
    title: "Courzerve",
    text: "During my undergraduate studies, a colleague and I founded Courzerve, a startup that directly competed with the well-known Hotdesk. Our team of 15 employees included software developers, tutors, and workspace providers. Courzerve's main goal was to connect students seeking a particular course with tutors and suitable workspaces. As a founder and team member, I played a crucial role in the development and implementation of Courzerve's core idea. Our startup was able to successfully connect students with tutors and workspaces, helping them achieve their academic goals.",
    moreInformation: {
      title: "Fullstack developer & Co-Founder",
      stacks: {
        main: [
          {
            typeLogo: <FaServer color="#ccc" size={25} />,
            logo: <FaNodeJs color="green" size={25} />,
          },
          {
            typeLogo: <FaDatabase color="#ccc" size={25} />,
            logo: <SiMongodb color="white" size={25} />,
          },
          {
            typeLogo: <RiComputerFill color="#ccc" size={25} />,
            logo: <FaReact color="#7cc5d9" size={25} />,
          },
          {
            typeLogo: <AiFillMobile color="#ccc" size={25} />,
            logo: <SiFlutter color="#42A5F5" size={25} />,
          },
          {
            typeLogo: <AiFillCloud color="#ccc" size={25} />,
            logo: <DiHeroku color="white" size={25} />,
          },
        ],
      },

      projects: [
        {
          title: "Backend service",
          description:
            "This is a Nodejs service which serves the teacher's mobile application and the working space web app as well as the main website the students use to reserve spots on",
        },
        {
          title: "Mobile application",
          description:
            "This is a mobile application which is used by teachers to reserve and manage working space and office spots to carry out a course under Courzerve or independently",
          images: [courzerveMobileOne],
        },
        {
          title: "Sehatech Course Website",
          description:
            "The website is a showcase for Courzerve courses in which you can view all course details and reserve a spot",
        },
        {
          title: "Working space web app",
          description:
            "This is a management web app for working spaces and office owners in which they can receive reservations, track them and handle the financial aspects",
        },
      ],
    },
  },
  {
    key: 4,
    title: "LoRa IoT Network",
    text: "I have implemented a Long Range Wide Area Network (LoRaWAN) and IoT sensors that leveraged a transceiver to transmit and receive data without internet access over long distances, typically spanning several kilometers. This technology allowed sensors to relay data from remote and isolated areas to a location with an internet connection, enabling monitoring and action based on suspicious readings. As an engineer, I have demonstrated my ability to implement innovative solutions that meet unique challenges and achieve specific goals.",
    components: [
      <a key={"first"} href={thesis} download>
        Download Thesis
      </a>,
    ],
  },

  {
    key: 5,
    title: "Brantu",
    text: "During my undergraduate studies, I worked as a frontend developer for Brantu, an e-commerce fashion store. My responsibilities included working on the main website and the admin system. As a developer, I played a crucial role in the design and implementation of the user interface, ensuring a seamless and intuitive experience for customers and admins alike. My experience at Brantu allowed me to hone my skills as a frontend developer and work on a real-world project, providing me with valuable experience for my future career.",
    components: [
      <a key={"first"} href="https://brantu.com/eg-en" target="_blank">
        Website
      </a>,
    ],
  },

  {
    key: 6,
    title: "SolutionsPlus",
    text: "I worked at SolutionsPlus, a software solutions company that outsources projects and software developers. During my tenure, I worked with multiple development stacks and software, exposing me to different technologies and frameworks. This experience allowed me to gain valuable insights into the minor differences between various software development frameworks and stacks, improving my ability to identify and implement the best solution for a given project. Working at SolutionsPlus enabled me to expand my knowledge of software development and build skills that I continue to leverage in my career.",
  },
  {
    key: 7,
    title: "Vodafone Hackathon 2019 Gawlah",
    text: `In 2019, I participated in the Vodafone Hackathon, competing against over 450 teams and achieving 9th place. The hackathon's primary goal was to create a comprehensive business idea in 3 days that encompassed the financial, marketing, and technical aspects and presented it to a judging committee consisting of CEOs from multinational companies. Our team's idea was to design an "Uber of tour guides" platform called Gawlah that would allow users to request a professional guide to accompany them throughout Egypt's top tourist destinations. I worked collaboratively with our teammates to ensure a seamless and intuitive user experience. Our success in the Vodafone Hackathon exemplifies my ability to work effectively within a team, develop innovative solutions, and present complex ideas to a diverse audience.`,
    components: [<a key={"first"} href="https://github.com/mohGhazala96/gawla" target="_blank">Github</a>],
  },
];
