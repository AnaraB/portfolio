import teamProfileGenerator from "./images/OOP_teamGenerator_demo.png";
import myRunApp from "./images/MyRun_demo.png";
import weatherDashboard from "./images/weather-dashboard-demo.png";
import webApisQuiz from "./images/08-web-apis-challenge-demo.gif";
import gazetteer from "./images/gazetteer.png";
import companyDirectory from "./images/Company_director.png";
import workDayScheduler from "./images/work-day-scheduler-demo.gif";
import portfolioBootstrap from "./images/portfolio-bootstrap.png"

export default [
  {
    id: "0",
    description: "Application to record running workouts",
    projectType: "Group Project",
    deployedUrl: "https://anarab.github.io/MyRun/",
    githubUrl: "https://github.com/AnaraB/MyRun",
    tools: ["JS", "JQuery", "Bootstrap", "API"],
    title: "MyRun",
    image: myRunApp,
  },
  {
    id: "1",
    description:
      "Node.js command-line application that generates a webpage and displays employee's basic info",
    githubUrl: "https://github.com/AnaraB/OOP_team_profile_generator",
    projectType: "bootcamp assignment",
    tools: ["JS", "Jest", "OOP", "Bootstrap", "Inquirer"],
    title: "Team_profile_generator",
    image: teamProfileGenerator,
  },
  {
    id: "2",
    description:
      "Application that retrieves weather data from third-party weather API",
    projectType: "bootcamp assignment",
    deployedUrl: "https://anarab.github.io/weather-dashboard/",
    githubRepo: "https://github.com/AnaraB/weather-dashboard",
    tools: ["HTML", "JS", "Bootstrap", "JQuery", "API"],
    title: "Weather-dashboard",
    image: weatherDashboard,
  },
  {
    id: "3",
    description: "Timed coding quiz with multiple-choice questions",
    deployedUrl: "https://anarab.github.io/web-apis-quiz/",
    githubUrl: "https://github.com/AnaraB/web-apis-quiz",
    projectType: "bootcamp assignment",
    tools: ["HTML", "JS", "JQuery", "CSS"],
    title: "web-apis-quiz",
    image: webApisQuiz,
  },
  {
    id: "4",
    description:
      "One-page, interactive map application provides various features for selected coutry.",
    projectType: "independent project",
    deployedUrl: "https://gazetteer.anara-berdalieva.co.uk/",
    githubRepo: "https://github.com/AnaraB/gazetteer",
    tools: ["HTML/JS/CSS", "APIs", "JQuery", "Leaflet", "Bootstrap/CSS", "AJAX", "XAMPP", "PHP"],
    title: "Gazetteer",
    image: gazetteer,
  },
  {
    id: "5",
    description:
      "The Employee Management System app, that allows users to view, add, edit, and delete employee records, departments, and locations",
    deployedUrl: "https://companydirectory.anara-berdalieva.co.uk/",
    githubUrl: "https://github.com/AnaraB/companydirectory",
    projectType: "independent project",
    tools: ["HTML/JS/CSS","Boostrap", "PHP", "SQL", "XAMPP"],
    title: "Company Directory",
    image: companyDirectory,
  },
  {
    id: "6",
    description:
      "A simple calendar application that allows a user to save events for each hour of the day.  ",
    projectType: "",
    deployedUrl: "https://anarab.github.io/Work-day-scheduler/",
    githubRepo: "https://github.com/AnaraB/Work-day-scheduler",
    tools: ["HTML", "JavaScript"],
    title: "Work-day-scheduler",
    image: workDayScheduler,
  },
  {
    id: "7",
    description:
      "Basic portfolio website",
    deployedUrl: "https://anarab.github.io/portfolio-b/",
    githubUrl: "https://github.com/AnaraB/portfolio-b",
    projectType: "portfolio",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    title: "My portfolio project",
    image: portfolioBootstrap
  }
];
