import React from "react"
import { Collapse } from "antd"

import css from "./portfolioPageContent.module.css"
import projects from "./projects"

const { Panel } = Collapse

//TODO: Need to add media queries to the CSS to make mobile version of this page!

function PortfolioPageContent() {
  return (
    <div className={css.portfolioPageContent}>
      <section id={css.portfolioIntro}>
        <h1 style={{ fontFamily: "Roboto" }}>My Portfolio</h1>
        <p className={css.summaryP}>
          Over the intensive 16 weeks of the School of Code bootcamp, I learned
          the tools of full-stack development, studied UI/UX design, navigated
          the intricacies of testing and deployment, and lived and breathed
          agile methodology.
        </p>
        <p className={css.projectP}>
          Halfway through the course, we got our first taste of a longer
          project, a week-long agile sprint to create a website for the West
          Midlands Combined Authority's Virtual Forest program. We presented
          what we'd made to a panel of judges (both WMCA employees and local
          tech industry professionals) at the end.
        </p>
        <div id={css.midtermPics}>
          <img
            className={css.midtermPic}
            alt="team for midterm project - planning"
            src="https://i.ibb.co/3sTxGHx/tree-project2.jpg"
          />
          <img
            className={css.midtermPic}
            alt="team for midterm project - coding"
            src="https://i.ibb.co/ZKCqYy7/tree-project.png"
          />
          <img
            className={css.midtermPic}
            alt="team for midterm project - coding"
            src="https://i.ibb.co/ZfSKwwt/midterm-presenting-pic.jpg"
          />
        </div>

        <p className={css.projectP}>
          For the final month, I worked in a team of three to develop Volt, a
          full stack progressive web app bringing fun dating app functionality
          to connecting volunteers with organisations and opportunities. Due to
          global circumstances, the last eight weeks of the course, including
          this final project, were completely online, which gave us valuable
          experience communicating and collaborating remotely. We presented this
          to over 200 attendees at the virtual Demo Day on 14 May 2020.
        </p>

        <p className={css.summaryP}>
          And now that my time as a School of Code bootcamper is over, I'm still
          coding up a storm, so watch this space for new additions!
        </p>
        <h4>Some of my favorite projects so far:</h4>
      </section>
      <Collapse
        accordion
        style={{
          background: "#61856e65",
          fontWeight: "bold",
          borderRadius: "15px",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {projects.map(project => (
          <Panel header={project.name} key={project.name}>
            <div className={css.panelContents}>
              <img
                className={css.projectImage}
                alt={project.name}
                src={project.img}
              />
              <div className={css.projectInfo}>
                <p className={css.projectDate}>{project.date}</p>

                {project.hostedLink && (
                  <p>
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.hostedLink}
                    </a>
                  </p>
                )}
                <p>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub repository
                  </a>
                </p>
                <p className={css.projectSummary}>{project.summary}</p>
              </div>
            </div>
          </Panel>
        ))}
      </Collapse>
      <p id={css.githubBlurb}>
        You can view these projects and more of my work at my{" "}
        <a id={css.githubLink} href="https://github.com/lizkaufman">
          Github profile
        </a>
        .
      </p>
    </div>
  )
}

export default PortfolioPageContent
