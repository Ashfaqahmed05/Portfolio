/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {FaHtml5, FaCss3Alt} from "react-icons/fa";
import {SiTailwindcss} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io5";
import {IoLogoFirebase} from "react-icons/io5";
import {FaReact} from "react-icons/fa6";
import {TbBrandNextjs} from "react-icons/tb";
import {SiNpm} from "react-icons/si";
import {DiNodejs} from "react-icons/di";
import {DiMongodb} from "react-icons/di";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";



import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashfaq Ahmed",
  title: "Hi all, I'm Ashfaq",
  subTitle: emoji(
    "A passionate Software Developer 🚀 skilled in building dynamic web applications with JavaScript, React.js, Next.js, Firebase, and a suite of cutting-edge libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fmsgpG01iYZTSQrUmzl7NKBrPh8q-iSE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ashfaqahmed05",
  linkedin: "https://www.linkedin.com/in/ashfaq-ahmed-6a7ab7279/",
  gmail: "Ashfaq24637@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100053927520168",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/20854534/mustafa-zuberi",
  instagram: "https://instagram.com/ashfaq1o9/",
  whatsapp: "https://wa.me/923123624637?text=Hello,%20I%20am%20interested%20in%20your%20services",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      reactIconsIcon: <FaHtml5 />
    },
    {
      skillName: "css3",
      reactIconsIcon: <FaCss3Alt />
    },
    {
      skillName: "tailwind",
      reactIconsIcon: <SiTailwindcss />
    },
    {
      skillName: "JavaScript",
      reactIconsIcon: <IoLogoJavascript />
    },
    {
      skillName: "reactjs",
      reactIconsIcon: <FaReact />
    },
    {
      skillName: "nextjs",
      reactIconsIcon: <TbBrandNextjs />
    },
    {
      skillName: "firebase",
      reactIconsIcon: <IoLogoFirebase />
    },
    {
      skillName: "nodejs",
      reactIconsIcon: <DiNodejs />
    },
    {
      skillName: "expressjs",
      reactIconsIcon: <SiExpress />
    },
    {
      skillName: "socketIo",
      reactIconsIcon: <TbBrandSocketIo />
    },
    {
      skillName: "npm",
      reactIconsIcon: <SiNpm />
    },
    {
      skillName: "mongodb",
      reactIconsIcon: <DiMongodb />
    },
    {
      skillName: "PHP",
      reactIconsIcon: <FaPhp />
    },
    {
      skillName: "Laravel",
      reactIconsIcon: <FaLaravel  />
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arqam public school",
      logo: require("./assets/images/Arqam school.png"),
      subHeader: "Matriculation in Computer Science",
      duration: "September 2011 - April 2021"
    },
    {
      schoolName: "Government Degree Science College Malir",
      logo: require("./assets/images/Degree college.jpg"),
      subHeader: "Intermediate in Pre-engineering",
      duration: "September 2022 - September 2024"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Laravel Developer",
      company: "Global Clicks",
      companylogo: require("./assets/images/GC-logo.jpg"),
      date: "March 2023 – August 2023",
      desc: "I've actively contributed to the development of Laravel Applications, spanning CMS panels and a mix of static and dynamic websites, playing a significant role in enhancing their functionality and user appeal."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/chatApp.webp"),
      projectName: "Mern ChatApp",
      projectDesc:
        `I developed a robust real-time chat application using the MERN stack, featuring seamless user authentication and an intuitive interface for sending friend requests. The app supports real-time messaging with the ability to share multimedia files, including videos, images, audios, and documents. Users can also create and manage groups, making it a comprehensive solution for both individual and group communication. This project highlights my expertise in building dynamic, user-centric applications with real-time capabilities.`,
      footerLink: [
        {
          name: "Frontend Repo",
          url: "https://github.com/Ashfaqahmed05/Mern-ChatApp-Frontend"
        },
        {
          name: "Demo Link",
          url: "https://www.linkedin.com/posts/ashfaq-ahmed-6a7ab7279_mernstack-webdevelopment-realtimechat-activity-7235688399850921985-IaoN "
        },
        {
          name: "Backend Repo",
          url: "https://github.com/Ashfaqahmed05/Mern-chatApp-Backend"
        }
      ]
    },
    {
      image: require("./assets/images/E-commerce.webp"),
      projectName: "E-Commerce Website",
      projectDesc:
        `This e-commerce website, built with React.js, Firebase, and Tailwind CSS, features separate interfaces for users and administrators. Key functionalities include:
User Interface: Users can browse products, add them to their cart, and place orders. Authentication ensures a secure environment. Users can also engage in real-time chat with administrators regarding their orders, facilitating efficient communication.
Admin Interface: Administrators have extensive control, including adding, editing, and deleting products. They can manage orders, interact with users via order-specific chat, and view all registered users.`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://e-commerce-theta-rust.vercel.app/"
        },
        {
          name: "Visit Repo",
          url: "https://github.com/Ashfaqahmed05/E-Commerce"
        }
      ]
    },
    {
      image: require("./assets/images/olx.webp"),
      projectName: "OLX Clone",
      projectDesc:
        "Developed using React.js, Firebase, and Bootstrap, this OLX clone provides a comprehensive platform for buying and selling products. The project includes full user authentication with a password reset feature. Users can create profiles, post ads for products they want to sell, and manage their ads through a user-friendly interface. Buyers can add products to their cart, place orders, and track the status of their orders. Sellers can accept or decline orders, providing real-time updates to buyers. This project demonstrates a robust e-commerce experience where users function as both sellers and buyers seamlessly.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-olx-nine.vercel.app/"
        },
        {
          name: "Visit Repo",
          url: "https://github.com/Ashfaqahmed05/react-olx/"
        }
        //  you can add extra buttons here.
      ]
    },
    
    
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3123624637",
  email_address: "Ashfaq24637@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
