import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">My name is Zahid Nur AL Azami</h2>
                    <p>I'm a Computer Science Fresh Graduate and I am a very confident and humble person.
                       I have interests in Project Management, Data, and Software Engineering.
                       I have strong determination and willingness to learn.
                       I'm also a sociable person, so I'll adapt easily and work in a team. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Education</span>
                <h2 className="colorlib-heading">My Educational Journey:</h2>
            </div>  
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-study" />
                </span>
                <div className="desc">
                    <h3>8 Junior High School, Yogyakarta, Indonesia </h3>
                    <p>Regular class. <br></br>
                       Graduated in 2013.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-study" />
                </span>
                <div className="desc">
                    <h3>8 Senior High School, Yogyakarta, Indonesia</h3>
                    <p>Natural sciences class. <br></br>
                    Graduated in 2016.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-study" />
                </span>
                <div className="desc">
                    <h3>Gadjah Mada University, Yogyakarta Indonesia</h3>
                    <p>Bachelor of Computer Science. Graduated in 2020 with GPA 3.47/4.0</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Skills</span>
                <h2 className="colorlib-heading">Some skills that I mastered:</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-monitor" />
                </span>
                <div className="desc">
                    <h3>Computer Programming Skills</h3>
                    <p>Good computer programming skills using C++, Python, MySQL, and Java.</p>
                    <p>Good web design programming skills using HTML, CSS, Javascript, and React.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-camera" />
                </span>
                <div className="desc">
                    <h3>Prototype and Graphic Design</h3>
                    <p>Good prototyping skills using Figma.</p>
                    <p>Good graphic design skills using CorelDRAW and Canva.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-user" />
                </span>
                <div className="desc">
                    <h3>Softskill</h3>
                    <p>Time management, teamwork, public speaking, and leadership skills are excellent due to organizational, volunteer, project, and event experiences.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
