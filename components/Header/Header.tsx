import React from 'react'
import ParticlesBg from 'particles-bg'
import {Fade} from 'react-awesome-reveal';

const Header = (props: any) => {
  if (!props.data) return null;

  const {name, description, github, project} = props.data.main
  console.log('Header', props.data)

  return (
    <header style={{backdropFilter: '#0f0f0f'}} id="home">
      <ParticlesBg type="circle" bg={true}/>

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
                Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
                About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#summaryInfo">
                Pricing
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
                Examples
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
                Sign Up
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade direction='up'>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade direction='up' duration={1200}>
            <h3>{description}.</h3>
          </Fade>
          <hr/>
          <Fade direction='up' duration={2000}>
            <ul className="social">
              <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Pricing
              </a>
              <a href={github} className="button btn github-btn">
                                Examples
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  )
}

export default Header