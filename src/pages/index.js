import React from "react"
import NavBar from "../components/navbar"
import Landing from "../components/landing"
import FooterQuote from '../components/footer'
import Projects from '../components/projects'



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


