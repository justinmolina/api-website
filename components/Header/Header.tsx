import React, {memo, useContext} from 'react';
import ParticlesBg from 'particles-bg';
import { Fade } from 'react-awesome-reveal';
import { GlobalStateContext } from '../../GlobalState/context/GlobalStateContext';
import GlobalStateActions from '../../GlobalState/Actions/GlobalStateActions';

const Header = (props: any) => {
  const { globalState, dispatch } = useContext(GlobalStateContext);

  if (!props.data) return null;
  const { name, description, github, project } = props.data.main;

  const openSignupForm = () => {
    alert('yp')
    dispatch({ type: GlobalStateActions.TOGGLE_SIGNUP_FORM, payload: true });
  };
  const openPricingInfo = () => {
    alert('ho')
    dispatch({ type: GlobalStateActions.TOGGLE_PRICING_FORM, payload: true });
  };
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [155, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: 'all', // all or center or {x:1,y:1,width:100,height:100}
    color: ['random', '#ff0000'],
    cross: 'dead', // cross or bround
    random: 15, // or null,
    g: 5, // gravity
    // f: [2, -1], // force
  };

  return (
    <header style={{ backdropFilter: '#0f0f0f' }} id="home">
      <ParticlesBg
        color={'#03FDFC'}
        num={window.outerWidth <= 500 ? 100 : 275}
        type="cobweb"
        config={config}
        bg={true}
      />

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
            <a onClick={openPricingInfo}
              className="smoothscroll">
              Pricing
            </a>
          </li>

          <li>
            <a onClick={openSignupForm} className="smoothscroll">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade triggerOnce={true} direction="up">
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade triggerOnce={true} direction="up" duration={1200}>
            <h3> {description}</h3>
          </Fade>
          <hr />
          <Fade triggerOnce={true} direction="up" duration={2000}>
            <ul className="social">
              <a onClick={openSignupForm} className="button btn project-btn">
                {/*<i className="fa fa-book"></i*/}
                Sign up
              </a>
              <a onClick={openPricingInfo} className="button btn github-btn">
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
  );
};

export default memo(Header);
