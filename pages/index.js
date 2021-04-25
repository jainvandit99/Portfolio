import React from "react"
import NavBar from "../components/navbar"
import Landing from "../components/landing"
import FooterQuote from '../components/footer'
import Projects from '../components/projects'
import ScrollTopButton from '../components/scrollTopButton'
import Services from "../components/services/services"
import ProjectFetch from  "../utils/projects"


export default function Home(props) {

  return (
    <React.StrictMode>
      <script src="utils/TweenMax.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js"></script>
      <script src="utils/flickity.pkgd.min.js"></script>
      <NavBar />
      <Landing />
      <Projects/>
      <Services />
      <FooterQuote />
      <ScrollTopButton />
    </React.StrictMode>
  ) 
}

export async function getServerSideProps(context){
  const pinnedProjects = await ProjectFetch.getPinnedProjects()
  const unpinnedProjects = await ProjectFetch.getUnPinnedProjects()
  return { props: {
    pinnedProjects: pinnedProjects,
    unpinnedProjects: unpinnedProjects
  }}
}


