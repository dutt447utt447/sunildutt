/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sunil Dutt",
  title: "Hi all, I'm Sunil Dutt",
  subTitle: emoji(
    "A visionary Founder & CEO of Dutt IT Solutions Pvt. Ltd. 👨‍💻 | Full Stack Developer 🛠️ | Cybersecurity Expert 🔒 | Educator ✍️ | Empowering 114,000+ Learners 📚"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xjQFPynPsJMujQRL4nrSel8oQsQkcLba/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dutt447utt447",
  linkedin: "https://www.linkedin.com/in/sunil-dutt-b2125ba3",
  gmail: "dutt447@gmail.com",
  facebook: "https://www.facebook.com/dutt123",
  twitter: "https://twitter.com/SunilDutt447",
  medium: "https://medium.com/@dutt447",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "INNOVATIVE TECH LEADER AND FULL-STACK DEVELOPER CREATING IMPACTFUL SOLUTIONS",
  skills: [
    emoji(
      "⚡ Designing and delivering secure, scalable, and user-centric web/mobile applications for diverse sectors"
    ),
    emoji(
      "⚡ Expertise in deploying and managing web servers like IIS, Apache, Nginx, and Tomcat for high availability"
    ),
    emoji(
      "⚡ Proficient in multiple programming languages, including C++, C#, Python, Java, Dart, Kotlin, TypeScript, and JavaScript"
    ),
    emoji(
      "⚡ Developing APIs (REST & GraphQL) and integrating predictive analytics models for actionable insights"
    ),
    emoji(
      "⚡ Implementing cutting-edge cybersecurity measures and conducting vulnerability assessments to protect critical systems"
    ),
    emoji(
      "⚡ Mentoring and empowering over 100,000 learners worldwide through tech education and hands-on training"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Android Development",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS Cloud",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Windows Server",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Linux Administration",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "YouTube Content Creation",
      fontAwesomeClassname: "fab fa-youtube"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Raffles University",
      logo: require("./assets/images/bitLogo.png"),
      subHeader: "Master of Computer Applications (MCA)",
      duration: "2022 - 2024",
      desc: "Graduated with a Master's degree in Computer Applications, specializing in advanced computing and software engineering.",
      descBullets: [
        "Acquired expertise in Software Development, Database Management, and Cloud Computing",
        "Developed a thesis on AI-driven content generation using real-world datasets",
        "Participated in academic projects focusing on enterprise applications and data analysis"
      ]
    },
    {
      schoolName: "NIELIT (National Institute of Electronics & Information Technology)",
      logo: require("./assets/images/nielitLogo.png"),
      subHeader: "Web Development Certification",
      duration: "2007 - 207",
      desc: "Completed a professional certification program to enhance programming and web development skills.",
      descBullets: [
        "Gained proficiency in building web applications using HTML, CSS, JavaScript, and PHP",
        "Hands-on training in developing scalable and interactive web solutions"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full-Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Infrastructure & DevOps",
      progressPercentage: "85%"
    },
    {
      Stack: "Cybersecurity",
      progressPercentage: "75%"
    },
    {
      Stack: "Digital Marketing",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section; set username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Founder & CEO",
      company: "Dutt IT Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/duttITLogo.png"),
      date: "July 2024 – Present",
      desc: "Leading the development and delivery of innovative IT solutions across government and private sectors.",
      descBullets: [
        "Developed 100+ software applications, including SANTOS, SAMBHAV, and eBilling systems for CRPF",
        "Delivered cloud-based SaaS solutions, including School Management Systems and enterprise-grade software",
        "Implemented scalable DevOps practices using Kubernetes and cloud platforms like AWS and Azure"
      ]
    },
    {
      role: "Technical Officer",
      company: "Central Reserve Police Force (CRPF)",
      companylogo: require("./assets/images/crpfLogo.png"),
      date: "January 2012 – July 2023",
      desc: "Played a key role in modernizing IT infrastructure and developing mission-critical applications for CRPF.",
      descBullets: [
        "Architected and managed large-scale applications such as PPMS and eBilling",
        "Led the deployment of Kubernetes to enhance scalability and streamline operations",
        "Pioneered cybersecurity solutions for the organization, ensuring data security and compliance"
      ]
    },
    {
      role: "Founder & Educator",
      company: "TechView Team",
      companylogo: require("./assets/images/techViewLogo.png"),
      date: "January 2019 – Present",
      desc: "Empowering learners globally through free and premium tech education.",
      descBullets: [
        "Founded an educational platform with 100,000+ learners worldwide",
        "Designed and delivered courses in Full-Stack Development, Cybersecurity, and Cloud Computing",
        "Conducted hands-on training at the Neemrana Learning Center for students and professionals"
      ]
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
  title: "Key Projects",
  subtitle: "SIGNIFICANT INITIATIVES AND SOLUTIONS DELIVERED IN DIVERSE DOMAINS",
  projects: [
    {
      image: require("./assets/images/khabrana.webp"),
      projectName: "Khabrana News",
      projectDesc: "Developed a complete news portal and Android application, enabling real-time updates and seamless content delivery.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://khabrana.com/"
        }
      ]
    },
    {
      image: require("./assets/images/santos.webp"), // Replace with actual image path
      projectName: "SANTOS",
      projectDesc: "Created a Smart Society Management System, automating daily operations such as complaint tracking, visitor management, billing, and notifications.",
      footerLink: [
        {
          name: "View Details",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/sambhav.webp"), // Replace with actual image path
      projectName: "SAMBHAV",
      projectDesc: "Developed a comprehensive job portal exclusively for paramilitary and army personnel, providing tailored employment opportunities.",
      footerLink: [
        {
          name: "View Details",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/ebilling.webp"), // Replace with actual image path
      projectName: "E-Billing System",
      projectDesc: "Designed and implemented an efficient billing and invoice management solution with payment gateway integration for seamless transactions.",
      footerLink: [
        {
          name: "View Details",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/school.webp"), // Replace with actual image path
      projectName: "School Management Software",
      projectDesc: "Developed a robust school management system streamlining attendance, fee collection, timetable generation, and student performance tracking.",
      footerLink: [
        {
          name: "View Details",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

////////////////////////////////////////////////////////////////////////
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Google Certified Digital Marketer",
      subtitle:
        "Certified in Digital Marketing Fundamentals (2018)",
      image: require("./assets/images/digital.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15QFrmH7_9YQh6gCmsQN9msvxuk6FG3rX/view?usp=sharing"
        },
      ]
    },
    {
      title: "Cyber Crime Investigation",
      subtitle:
        "National Cybercrime Training Center (NCRB)",
      image: require("./assets/images/ncrb.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1xxZm1YS0TZ-zcHR5jMxy4VkJgZCZm1dP/view?usp=sharing"
        }
      ]
    },

    {
      title: "Ethical Hacking",
      subtitle: "Completed Certification from IIT Kharagpur, India for Ethical Hacking",
      image: require("./assets/images/iit.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/19ThCwV4sjljt53RKrXfYx9tOFEyXRI5G/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Analytics",
      subtitle: "Completed Certification from Google Academy for Google Analytics",
      image: require("./assets/images/analytic.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1yoA4hHQGTdHZQmOjbiGiGZne-SUWdEwX/view?usp=sharing"
        }
      ]
    },
    {
      title: "Internet Of Things",
      subtitle: "Completed Certification from CISCO Academy for IoT",
      image: require("./assets/images/cisco.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wBGLj_CB2kR7nWkFs3SyfmVDtdUdICBS/view?usp=sharing"
        }
      ]
    },
    {
      title: "Founded TechView Team",
      subtitle: "In 2020, started the IT Learning Portal which provides Free Certifications",
      image: require("./assets/images/logo.webp"),
      footerLink: [
        {
          name: "Learning Portal",
          url: "https://www.techviewteam.com"
        },
        {
          name: "Know All About Me",
          url: "https://drive.google.com/file/d/1xjQFPynPsJMujQRL4nrSel8oQsQkcLba/view?usp=sharing"
        }
      ]
    },
    {
      title: "SANTOS Software (CRPF)",
      subtitle: "Recognized as a Champion Project at the 67th All India Police Duty Meet and India Book of Records (2023)",
      image: require("./assets/images/santos.webp"),
      footerLink: [
        {
          name: "Learn More",
          url: "https://crpf.gov.in"
        }
      ]
    },
    {
      title: "SAMBHAV Software (CRPF)",
      subtitle: "Developed a pivotal application for CRPF personnel management",
      image: require("./assets/images/sambhav.webp"),
      footerLink: [
        {
          name: "Learn More",
          url: "https://crpf.gov.in"
        }
      ]
    },
    {
      title: "eBilling Software (CRPF)",
      subtitle: "Developed a critical application for digital billing and financial management",
      image: require("./assets/images/ebilling.webp"),
      footerLink: [
        {
          name: "Learn More",
          url: "https://crpf.gov.in"
        }
      ]
    },
    {
      title: "School Management System",
      subtitle: "Led the development of a cloud-based School Management System to digitize educational institutions",
      image: require("./assets/images/school.webp"),
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.ditschool.com"
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
      url: "http://dutttechview.blogspot.com/2018/08/how-to-send-confidential-mail-using-g.html",
      title: "How to send confidential message using Gmail",
      description:
        "Do you want to send confidential message using Gmail then this article is for you"
    },
    {
      url: "http://dutttechview.blogspot.com/2018/07/check-your-email-address-password.html",
      title: "How to check your Password is Safe?",
      description:
        "Article is about to know how can we check our password is safe."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "YouTube",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE THROUGH YOUTUBE ALSO😅"
  ),

  talks: [
    {
      title: "Visit Our YouTube Channel",
      subtitle: "YouTube",
      slides_url: "https://www.youtube.com/channel/UCRI10CdtQJMFzHcxbuHSe8Q",
      event_url: "https://www.youtube.com/channel/UCRI10CdtQJMFzHcxbuHSe8Q?sub_confirmation=1"
    },
    {
      title: "TechView Team - IT Learning Portal",
      subtitle: "Learn Full-Stack Development, Cybersecurity, and More!",
      slides_url: "https://www.techviewteam.com",
      event_url: "https://www.youtube.com/channel/UCRI10CdtQJMFzHcxbuHSe8Q?sub_confirmation=1"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("YouTube 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT CYBER AWARENESS AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://youtu.be/lOqHTpG-DkM"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8619333672",
  email_address: "dutt447@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SunilDutt447", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
