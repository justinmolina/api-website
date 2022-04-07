import React, {memo, useReducer} from 'react'
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import SignupForm from '../components/Signup/SignupForm';
import GlobalStateReducer from '../GlobalState/Reducer/reducer';
import {GlobalStateContext, initalState} from '../GlobalState/context/GlobalStateContext'
import PricingContainer from '../components/Pricing/PricingContainer';

interface HomeProps {
    summaryInfo: any
}

// @ts-ignore
const Home: NextPage = (props: HomeProps) => {

  const [globalState, dispatch] = useReducer(GlobalStateReducer, initalState)
  const Header: any = dynamic(
    // @ts-ignore
    () => {
      return import ('../components/Header/Header')
        .then((mod) => mod.default)
    }, {loading: () => null, ssr: false}
  )

  const About: any = dynamic(
    // @ts-ignore
    () => {
      return import ('../components/About/About')
        .then((mod) => mod.default)
    }, {loading: () => null, ssr: false}
  )
  const BodyInfo: any = dynamic(
    // @ts-ignore
    () => {
      return import ('../components/BodyInfo/BodyInfo')
        .then((mod) => mod.default)
    }, {loading: () => null, ssr: false}
  )

  return (
    <GlobalStateContext.Provider value={{globalState: globalState, dispatch: dispatch}}>
      <div>
        <Header data={props.summaryInfo}/>
        <About data={props.summaryInfo}/>
        <BodyInfo data={props.summaryInfo}/>
        <PricingContainer summaryInfo={props.summaryInfo}/>
        <SignupForm/>
      </div>
    </GlobalStateContext.Provider>
  )
}

export function getStaticProps() {
  let summaryInfo = require('../public/summaryInfo.json')
  return {
    props: {
      summaryInfo
    }
  }
}

export default memo(Home)
