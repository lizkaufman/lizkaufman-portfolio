import React from "react"
import { Collapse } from "antd"

import css from "./portfolioPageContent.module.css"
import projects from "./projects"

const { Panel } = Collapse

function PortfolioPageContent() {
  return (
    <div className={css.portfolioPageContent}>
      <section id={css.portfolioIntro}>
        <h1 style={{ fontFamily: "Roboto" }}>My Skills and Portfolio</h1>
        <p>Placeholder text - intro p describing SoC process</p>
        <h3 style={{ fontFamily: "Roboto" }}>Technical skills I developed:</h3>
        <ul>
          <li></li>
        </ul>
      </section>
      <Collapse
        accordion
        style={{
          background: "#61856e65",
          fontWeight: "bold",
          borderRadius: "15px",
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
    </div>
  )
}

export default PortfolioPageContent
