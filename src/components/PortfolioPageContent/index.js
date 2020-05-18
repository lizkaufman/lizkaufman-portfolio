import React from "react"

import ProjectCard from "./ProjectCard"

const projects = [
  {
    name: "Volt",
    date: "13 April-8 May 2020",
    mainTools: [
      "React",
      "NextJS",
      "Jest",
      "Serverless",
      "AWS DynamoDB",
      "Firebase",
    ],
    summary:
      "For our School of Code final project, we were tasked with creating an app that helps match volunteers with organisations and opportunities. As a team of three, we created Volt, a progressive web app that uses dating app functionality to match volunteers and organisations for a long-term volunteering relationship. I made the personality quiz and matching interface, ensured the app was responsive for both mobile and computer users, and designed the fully RESTful API on the back end.",
    img: "https://i.ibb.co/TrS0PgC/volt-screenshot.png",
    repoLink: "",
  },
  {
    name: "West Midlands Virtual Forest",
    date: "9-13 March 2020",
    mainTools: ["React", "PostgreSQL"],
    summary:
      "For our School of Code mid-term project, our team of four received a brief from the West Midlands Combined Authority to create an interactive page for their Virtual Forest tree-planting initiative. In one week (with three days of actual coding), we built a single-page application that shows trees planted on a map of the WCMA key areas and accepts new trees planted and requests for trees. I designed functional components and logic, linked front end components to the PostgreSQL database tables on the back end, and used CSS to make web, tablet, and mobile versions.",
    img: "",
    repoLink:
      "https://github.com/lizkaufman/front-end-week-8-project-team-indecision",
  },
  {
    name: "",
    date: "",
    mainTools: [],
    summary: "",
    img: "",
    repoLink: "",
  },
]

function PortfolioPageContent() {
  return <div></div>
}

export default PortfolioPageContent
