import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import './projects.css'
// import sampleImg1 from '../../assets/project-images/sample-project-image1.png'
// import memestagramImg from '../../assets/project-images/memestagram.png'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'



const Projects = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        PinnedProjects: allMongodbPortfolioProjects(filter: {isPinned: {eq: true}}) {
          edges {
            node {
              projectLink
              year
              id
              img
              color
              brief
              links {
                href
                text
              }
              title
            }
          }
        }
        UnPinnedProjects: allMongodbPortfolioProjects(filter: {isPinned: {eq: false}}) {
          edges {
            node {
              projectLink
              year
              id
              img
              color
              brief
              links {
                href
                text
              }
              title
            }
          }
        }
      }      
    `)
    const PinnedProjectData = data.PinnedProjects;
    const UnPinnedProjectData = data.UnPinnedProjects;
    return(
        <div className="projectContainer" >
            <Row>
                <Col xs="12" md="7">
                    <Container style={{padding: "8px 2px"}}>
                        <p style={{fontSize:"18px"}}>SIDE PROJECTS</p>
                        <p style={{fontSize:"16px"}}>Outside of work, I enjoy building simple tools & 
                            products as an excuse to continue my passion in coding & 
                            learning new technology. Here are some of the projects I've launched so far.</p>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className="projectGrid">
                    {
                        PinnedProjectData.edges.map(function(project, index){
                            return <PinnedProject data={project.node} />
                        })
                    }
                    <div style={{display: "grid", borderWidth:"0 0 1px 0", borderColor:"#eee", borderStyle:"solid"}}>
                        {
                            UnPinnedProjectData.edges.map(function(project, index) {
                                return <UnPinnedProject data={project.node} />
                            })
                        }
                    </div>
                        
                </Col>
            </Row>
        </div>
    )
}

class PinnedProject extends Component {
    render(){
        // const img = require(this.props.data.img);
        return(
            <div style={{backgroundColor: this.props.data.color}} className="pinned-project">
                <Container >
                    <Row style={{alignItems:"center"}}>
                        <Col xs="12" md="6" >
                            <img src="project-images/sample-project-image1.png"style={{maxWidth:"100%"}}></img>
                        </Col>
                        <Col xs="12" md="6" style={{display:"inline-grid", padding:"16px"}}>
                            <div className="pinnedProjectText">
                                <p style={{fontWeight:"600", marginBottom: "8px"}}>{this.props.data.title}</p>
                                <p style={{fontWeight:"300", fontSize:"18px", marginBottom: "4px"}}>{this.props.data.brief}</p>
                                <p style={{fontWeight:"300", fontSize:"13px", marginBottom: "4px"}}>{this.props.data.year}</p>
                            </div>
                            <div style={{overflow:"hidden",marginBottom:"8px"}}>
                                {
                                    this.props.data.links.map(function(link, index){
                                        return <PinnedProjectLink linkText={link.text} href={link.href}/>
                                    })
                                }
                            </div>
                            <VisitProjectButton href={this.props.data.projectLink}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


class PinnedProjectLink extends Component {
    render() {
        return (
            <a href={this.props.href} target="_blank" style={{fontWeight:"400", fontSize:"14px", color:"rgb(51,51,51)", float: "left" ,clear: "left", marginBottom: "6px"}}>
                <svg fill="none" height="16" stroke="rgb(51,51,51)" stroke-linecap="square" stroke-linejoin="arcs" stroke-width="1" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"8px"}}><path d="M5 12h13M12 5l7 7-7 7"></path></svg>
                {this.props.linkText}
            </a>
        )
    }
}


class VisitProjectButton extends Component {
    render() {
        return (
            <a style={{width:"fit-content", maxWidth: "100%" ,height: "fit-content", margin:this.props.margin}} href={this.props.href} target="_blank">
                <button className="pinnedProjectButton" style={{margin: "0 auto 0 0", maxWidth: "100%"}}>
                </button>
            </a>
        )
    }
}

class UnPinnedProject extends Component {
    render(){
        return (
            <div classsName="unpinned-project" style={{minHeight:"80px", borderWidth:"1px 0 0px 0", borderColor:"#eee", borderStyle:"solid"}}>
                <Container style={{height:"100%"}}>
                    <Row style={{height:"100%"}}>
                        <Col xs="2" md="1" style={{height:"100%", padding:"8px", display:"flex"}}>
                            <img className="unpinnedIcon"src={this.props.data.img}></img>
                        </Col>
                        <Col xs="7" style={{height:"100%"}}>
                            <Row style={{height:"100%", paddingRight: "8px"}}>
                                <Col id="unpinnedProjectTitleContainer" xs="12" md="4">
                                    <p id="unpinnedProjectTitle">{this.props.data.title}</p>
                                </Col>
                                <Col id="unpinnedProjectBriefContainer" xs="12" md="8">
                                    <p id="unpinnedProjectBrief">{this.props.data.brief}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="3" md="4" style={{display:"flex"}} id="unpinned-project-button">
                            <VisitProjectButton href={this.props.data.projectLink} margin="auto 8px auto auto"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Projects