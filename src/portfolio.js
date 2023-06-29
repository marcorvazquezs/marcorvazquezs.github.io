/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

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
  username: "Marco Vazquez",
  title: "Hi all, I'm Marco",
  subTitle: emoji(
    "An experienced cybersecurity professional with close to 10 years of expertise in systems engineering, information security administration, and leading cybersecurity instruction."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QoAHS3v_Cw_MNEA-flJ84vOx_4Kfi5Rx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/marcorvazquezs",
  linkedin: "https://www.linkedin.com/in/marcorvazquez/",
  gmail: "marcorvazquezs@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "TECH ENTHUSIAST OBSESSED WITH ALL THINGS CYBER",
  skills: [
    emoji("⚡ Implement robust security measures to safeguard critical assets"),
    emoji("⚡ Build, configure and maintain complex infrastructure"),
    emoji("⚡ Develop and deliver comprehensive cybersecurity training")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "macOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "VSCode",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PowerShell",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Virtualization",
      fontAwesomeClassname: "fas fa-desktop"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Western Governors University",
      logo: require("./assets/images/wgu_seal.png"),
      subHeader: "Master of Science in Cybersecurity and Information Assurance"
      //duration: "September 2017 - April 2019",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "Western Governors University",
      logo: require("./assets/images/wgu_seal.png"),
      subHeader: "Bachelor of Science in Network Operations and Security"
      //duration: "September 2013 - April 2017",
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Bash", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "PowerShell",
      progressPercentage: "50%"
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Cybersecurity Instructor",
      company: "Code Fellows",
      companylogo: require("./assets/images/CF.png"),
      date: "Nov 2021 – Present",
      desc: "Develop and implement comprehensive cybersecurity training program, encompassing topics such as network security, incident response and ethical hacking.",
      descBullets: [
        "Stay up-to-date with the latest cybersecurity threats, trends, and technologies through continuous research and professional development activities",
        "Foster a collaborative learning environment by facilitating discussions, group projects, and knowledge sharing among students."
      ]
    },
    {
      role: "System Engineer",
      company: "DomainTools",
      companylogo: require("./assets/images/domaintools.png"),
      date: "Dec 2020 – Nov 2021",
      desc: "Designed, implemented, and maintained robust and scalable infrastructure solutions ensuring high availability and optimal performance."
    },
    {
      role: "Information Security Administrator / Cloud Engineer",
      company: "Rubica",
      companylogo: require("./assets/images/rubica.png"),
      date: "Jan 2019 – Oct 2020",
      desc: "Developed, implemented, and maintained information security policies, procedures, and standards to ensure compliance with regulatory requirements and industry best practices.",
      descBullets: [
        "Implemented infrastructure-as-code (IaC) practices using tools like Terraform or CloudFormation, enabling the provisioning and management of cloud resources in an automated and consistent manner."
      ]
    },
    {
      role: "Senior User Support Analyst",
      company: "Florida Supreme Court",
      companylogo: require("./assets/images/FSC.png"),
      date: "July 2014 – Jan 2019",
      desc: "Provided technical support and troubleshooting expertise to end-users, resolving complex hardware and software issues in a timely and efficient manner."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  //subtitle:
  // "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CompTIA CySA+",
      //subtitle:
      //  "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/CySA+ce certified logo.png"),
      imageAlt: "CompTIA CySA+",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/acc80555-21a7-4ab7-8589-621823ffaa62/public_url"
        }
      ]
    },
    {
      title: "Certified Ethical Hacker",
      // subtitle:
      //  "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/CEH_Badge.png"),
      imageAlt: "EC-Council CEH",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/org/ec-council/badge/certified-ethical-hacker-ceh"
        }
      ]
    },
    {
      title: "CompTIA Security+",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/SecurityPlus Logo Certified CE.png"),
      imageAlt: "CompTIA Sec+",
      footerLink: [
        {
          name: "Certification", 
          url: "https://www.credly.com/badges/11711c6d-22f6-4f9a-af0e-d6ab77d290ff/public_url"
        }
      ]
    },
    {
      title: "Cisco CCNA Security",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/cisco_ccna_security.png"),
      imageAlt: "Cisco CCNA Security",
      footerLink: [
        {
          name: "Certification", 
          url: "https://www.credly.com/badges/2c773de8-31da-4a07-a111-51390c657f45/public_url"
        }
      ]
    },
    {
      title: "Cisco CCNA R&S",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/ccna_R_26S.png"),
      imageAlt: "Cisco CCNA R&S",
      footerLink: [
        {
          name: "Certification", 
          url: "https://www.credly.com/badges/5fb97f5b-04e9-4e2f-b9ff-0a05938b36e4/public_url"
        }
      ]
    },
    {
      title: "CompTIA Net+",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/NetworkPlus Logo Certified CE.png"),
      imageAlt: "CompTIA Net+",
      footerLink: [
        {
          name: "Certification", 
          url: "https://www.credly.com/badges/5fb97f5b-04e9-4e2f-b9ff-0a05938b36e4/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
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
  email_address: "marcorvazquezs@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

//const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  //isHireable
};
