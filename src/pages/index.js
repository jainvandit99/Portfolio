import React, { Fragment } from "react"
import NavBar from "../components/navbar/navbar"
import Landing from "../components/landing/landing"
import FooterQuote from '../components/footer/footer'
import Projects from '../components/projects/projects'
import '../styles/global.css'



export default function Home() {
  return (
    <React.StrictMode>
      <NavBar />
      <Landing />
      <Projects/>
      <FooterQuote />
    </React.StrictMode>
  ) 
}


