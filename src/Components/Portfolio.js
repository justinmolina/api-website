import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Img3 from '../Components/img3'

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    projects.push(
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Img3 model={"https://firebasestorage.googleapis.com/v0/b/hullthread.appspot.com/o/Models%2Ffccc4984-d038-489e-a489-08662e7fe604.glb?alt=media&token=0b5be17e-ef05-4103-aabb-4a599b1df130"}
                  height={'150px'}
            />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
        )
    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of our work.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
