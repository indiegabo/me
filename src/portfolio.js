/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
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
  username: "IndieGabo",
  title: "Hey, I'm Gabo!",
  subTitle: emoji(
    "An indie games (and assets) developer, streamer and talker from Brazil 🇧🇷."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/indiegabo",
  linkedin: "https://www.linkedin.com/in/gabriel-de-souza-leal-54b150251/",
  youtube: "https://www.youtube.com/@OIndieGabo",
  twitch: "https://twitch.tv/indiegabo",
  gmail: "indiegabodev@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I develop games coding in C# for Unity. Although I am specialized in 2D games, I can honestly say that I fear no projects.",
  skills: [
    emoji(
      "⚡ 2D and 3D games."
    ),
    emoji("⚡ Custom editor windows (UI Toolki)."),
    emoji(
      "⚡ Composition oriented programming focused on scalable systems."
    ),
    emoji("⚡ My WEB dev background helps me a lot when crafting multiplayer experiences."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidade Salvador",
      logo: require("./assets/images/unifacs-logo.jpg"),
      subHeader: "Technologist  in Internet applied Systems",
      duration: "January 2011 - December 2013",
      desc: "Formed my self as a Systems Analyst focused on internet applied solutions",
      descBullets: [
        "Object Oriented Programming",
        "Databases",
        "Web Development",
        "Computer Architecture",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Unity", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C#",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (apis)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Network Developer",
      company: "Estante Mágica",
      companylogo: require("./assets/images/estante-magica-logo.png"),
      date: "November 2023 – Present",
      desc: "Part time journey developing the Magic Land mobile game.",
      descBullets: [
        "Responsible for stablishing multiplayer network funcionality",
        "Responsible for creating the C# http requests flow and scrtucture",
        "Basically the glue between Unity and the backend",
      ]
    },
    {
      role: "Lead Developer / Game Designer",
      company: "No Slopes",
      companylogo: require("./assets/images/no-slopes-logo.jpg"),
      date: "December 2021 – Present",
      desc: "Responsible for stablishing all the tooling and features for the games crafted by the studio.",
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
  title: "Games I have worked on",
  subtitle: "Some games I participated either as developer or Game Designer",
  projects: [
    {
      image: require("./assets/images/boom-boom-castle-splash.png"),
      projectName: "Boom Boom Castle",
      projectDesc: "A game jam game made in Unity under the \"Colateral Effect\" theme. \"Best Theme\" fit category winner.",
      footerLink: [
        {
          name: "Play It",
          url: "https://alternative-control.itch.io/boom-boom-castle"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chasing-illusions-splash.jpg"),
      projectName: "Chasing Illusions",
      projectDesc: "A game jam game made in Unity under the \"Illusions\" theme. We had the pleasure of winnning the game jam with this submission",
      footerLink: [
        {
          name: "Play It",
          url: "https://no-slopes.itch.io/chasing-illusions"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const assetsProjects = {
  title: "OpenSource Assets",
  subtitle: "Things I made for the community",
  projects: [
    {
      image: require("./assets/images/sprite-animations-banner.png"),
      projectName: "Sprite Animations",
      projectDesc: "A smooth and intuitive way to work with sprite sheets in Unity.",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://no-slopes.github.io/sprite-animations/"
        }
        //  you can add extra buttons here.
      ]
    }
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
        { name: "Certification", url: "" },
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
  number: "+55-71991469251",
  email_address: "indiegabodev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "indiegabo", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  assetsProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
