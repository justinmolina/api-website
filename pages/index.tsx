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
      <BodyInfo data={props.summaryInfo}/>
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
