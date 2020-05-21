import React from "react"

import css from "./aboutPageContent.module.css"

function AboutPageContent() {
  return (
    <div className={css.aboutPageContent}>
      <h1 style={{ fontFamily: "Roboto" }}>My Journey</h1>
      <img
        id={css.mainPic}
        alt="headshot of me"
        src="https://i.ibb.co/L8qKcFK/withbeemug.jpg"
      />
      <section id={css.myBackground}>
        <p>
          The first thing people often notice about me is my accent. I grew up
          just outside of Atlanta in the USA, but I'm so lucky to be able to
          call Nottingham home since 2013. I'd say I'm somewhere mid-Atlantic,
          halfway between American and British.
        </p>
        <p>
          I've always had an inkling in the back of my mind that I have an
          affinity with computers, from the first very beige desktop my dad
          built me in the '90s with parts from his work's scrap heap. I was in
          the computer club in elementary school, having a blast building sites
          on good old Netscape Navigator, complete with that ubiquitous “Under
          construction!” blinking gif of course.
        </p>
        <p>
          I ended up studying history and archaeology at university, but it
          didn't take long to realize that as someone who doesn't like heat,
          sun, dirt, or camping, I probably didn't have what it takes to be an
          actual archaeologist! From there, I worked in loyalty operations at
          the Boots head office and in project management in the NHS. I'm
          grateful for what I learned in these roles, but I always felt like
          something was missing.
        </p>
        <p>
          Almost without me realising, the little seed of an idea that maybe a
          career in tech was for me after all had sprouted roots in the back of
          my mind over the last few years, and when I started working through
          tutorials on FreeCodeCamp.org, I was hungry for more - it was as if my
          brain came to life again! In 2019, I had my "If not now, when?"
          moment, leaving the NHS to pursue learning to code full-time. When I
          was one of over 1,500 applicants and then made it to one of the 24
          places in round three of the School of Code, it felt meant to be.
        </p>
        <div id={css.socPics}>
          <img
            className={css.socPic}
            id={css.socGroupPic}
            alt="School of Code groupshot"
            src="https://i.ibb.co/pXt3qCy/soc-groupshot-CROPPED.jpg"
          />
          <img
            className={css.socPic}
            id={css.socRemote}
            alt="School of Code remote on Zoom"
            src="https://i.ibb.co/NV0xTnj/last-day-zoom.jpg"
          />
        </div>
      </section>
      <img
        src="https://designshack.net/postimages/faders_final.gif"
        className={css.divider}
        alt="divider"
      />
      <section id={css.socExperience}>
        <div id={css.socNarrative}>
          <h3>My Transformation into a Developer</h3>
          <p>
            I can say, without any trace of a doubt, that the
            <a
              className={css.link}
              href="https://www.schoolofcode.co.uk/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              School of Code bootcamp{" "}
            </a>
            has changed my life. For the first time ever, I feel like I finally
            know what I want to be when I grow up. The School of Code welcomes
            people from all different ages and backgrounds, not ust techie
            geniuses who have been coding since their ages were in the single
            digits, and it focuses on dynamic, employable skills, with a job
            putting those skills into practice to look forward to at the end of
            it — it’s been the opportunity of a lifetime. Nobody expected a
            pandemic in the middle of it, but we continued the last eight weeks
            of the course fully remotely.
          </p>
          <p>
            I've learned skills and technology that took me from a beginner to a
            full-stack developer, alongside exposure to concepts around UX/UI,
            DevOps, and agile project management. I especially enjoy using React
            and its various libraries, and I enjoy hooking up the “guts” of an
            application, tinkering with React and JavaScript logic to make
            dynamic apps.
          </p>
          <p>
            <a
              className={css.link}
              href="/portfolio"
              style={{ padding: "0 5px" }}
            >
              {" "}
              Click here to see what I've built!{" "}
            </a>
          </p>
          <p>
            Now that I've "graduated", I finally have a career I love, and I
            can't wait for the opportunity to use the skills I’ve honed at the
            School of Code to kickstart my new career as a full-stack developer
            in my first software engineering role.
          </p>
        </div>
        <aside id={css.skillsList}>
          <h4>
            In these 16 weeks, I've gained experience with technologies
            including:
          </h4>
          <ul>
            <li>Front end: JavaScript ES6, HTML5, CSS3</li>
            <li>Frameworks and libraries: React, Gatsby, Next</li>
            <li>Back end: Node, Express, PostgreSQL, WebSocket</li>
            <li>Services: Netlify, Heroku, Serverless, AWS, Docker</li>
            <li>Tools: Git, Docker</li>
            <li>Testing and test-driven development</li>
          </ul>
          <h4>And soft skills, such as:</h4>
          <ul>
            <li>Agile methodology</li>
            <li>Solo and pair programming</li>
            <li>
              Creative problem solving, both independently and within a larger
              team
            </li>
            <li>Working, learning, and collaborating remotely</li>
          </ul>
        </aside>
      </section>
      <img
        src="https://designshack.net/postimages/faders_final.gif"
        className={css.divider}
        alt="divider"
      />
      <section id={css.hobbiesInterests}>
        <h3>And when I'm not coding...</h3>
        <p>
          I code some more! I'm having fun working on personal projects on my
          own time, including an online version of Jeopardy, my favorite game
          show, and an app to track the stitches on my crochet projects. I'm
          also taking my first baby steps into the world of hardware with my
          Arduino kit. I hope to be able to build and tinker with electronics
          one day along with being able to power them with my code.{" "}
        </p>
        <p>
          I also enjoy pub quizzes, University Challenge, the Chase, and
          anything else involving trivia to a level that has been described as
          “a little bit scary.” When I can be dragged away from the computer, I
          love a good ramble in the Peak District as well (punctuated by a good
          country pub stop of course!). My other interests include doting on my
          very spoiled cat, creative writing during the National Novel Writing
          Month event each November, reading fantasy and non-fiction books,
          collecting classic rock LPs from the 1960s and 1970s, crocheting, and
          tending to my collection of over 100 houseplants.
        </p>
        <div id={css.hobbiesInterestsPics}>
          <img
            className={css.hobbiesInterestsPic}
            id={css.peakDistPic}
            alt="walking in Peak District"
            src="https://i.ibb.co/H2KYww2/walking.jpg"
          />
          <img
            className={css.hobbiesInterestsPic}
            id={css.bookstorePic}
            alt="reading at a bookstore"
            src="https://i.ibb.co/vkz4k1K/bookstore.jpg"
          />
          <img
            className={css.hobbiesInterestsPic}
            id={css.tinyPlantPic}
            alt="with tiny plant plushie"
            src="https://i.ibb.co/TKCHv9P/smolplantfren.jpg"
          />
          <img
            className={css.hobbiesInterestsPic}
            id={css.tonyPic}
            alt="Tony (black cat)"
            src="https://i.ibb.co/HhkVKzf/sterntonyatdesk.jpg"
          />
        </div>
      </section>
    </div>
  )
}

export default AboutPageContent
