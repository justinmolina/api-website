import React, {useEffect} from 'react'
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

interface HomeProps {
    summaryInfo: any
}

// @ts-ignore
const Home: NextPage = (props: HomeProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  console.log(props.summaryInfo)

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
    <div>
      <Header data={props.summaryInfo}/>
      <About data={props.summaryInfo}/>
        <div style={{background: 'radial-gradient(rgba(25,25,28,0) 50%,#19191c 80%),conic-gradient(#9c3cf7 0,#19191c 15.2%,#19191c 18.2%,#1e1ae8 20.5%,#19191c 30.2%,#19191c 50%,#0e0ab4 56.5%,#1e1ae8 59.4%,#060551 66.2%,#101057 72.9%,#242473 85.1%,#1e1ae8 89.1%,#0a06b7 90.6%,#19191c 93.7%,#9c3cf7 100%)'}}>
      <BodyInfo data={props.summaryInfo}/>
        </div>
    </div>
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

export default Home
