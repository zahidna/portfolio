import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="portfolio">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Portfolios</span>
                <h2 className="colorlib-heading animate-box">Some of projects I have worked on:</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-device-laptop" />
                      </div>
                      <div className="timeline-label">
                        <h2>Fire Detection System Based on Internet of Things (IoT)  <span>2020</span></h2>
                        <p>Undergraduate Thesis. <br></br>
                        The research used the Mamdani fuzzy logic method with the mean of maximum defuzzification method. This method is combined with Internet of Things technology,
                        thus enabling the IoT platform to communicate with other devices.
                        In addition, a bot telegram messenger was designed as a notification system and IoT platform control system.
                        The program is designed using the Python on the Raspberry Pi device.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-lab2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Psycallogy: Psychologist-Patient Chatting Web Apps  <span>2018</span></h2>
                        <p>As Frontend Developer, working on a project as a team for the final project of a university course. <br></br>
                        Web application that can find and connect psychologists with patients or vice versa.
                        Inspired by the difficulty of finding a psychologist when needed, especially because of mental health problems are still considered quite taboo in Indonesia.
                        The frontend web is designed using HTML, CSS, and JavaScript.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-phone3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Ceki Counter  <span>2017</span></h2>
                        <p>An android application for scoring in a card game commonly known as "Ceki" (in Javanese).
                          Inspired by the habit of playing cards with friends, but requires a media to save and update the score of the card game.
                          The application is designed using Java in Android Studio.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
