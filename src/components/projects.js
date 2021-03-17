import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'

const ProjectData = {
    pinned: [{
            color:"#fedfe7",
            img:"project-images/sample-project-image1.png",
            title:"Memestagram",
            brief:"An iOS Application to create, browse and upload memes.",
            year:"2019 - iOS Application Development",
            links:[{
                text: "View Project on Github",
                href: "https://github.com/jainvandit99/Memes-For-All"
            }, {
                text: "View Project on Github",
                href: ""
            }],
            projectLink: "https://github.com/jainvandit99/Memes-For-All",
            isPinned: true
        },
        {
            color:"rgb(211, 224, 255)",
            img:"project-images/sample-project-image1.png",
            title:"Memestagram",
            brief:"An iOS Application to create, browse and upload memes.",
            year:"2019 - iOS Application Development",
            links:[{
                text: "View Project on Github",
                href: "https://github.com/jainvandit99/Memes-For-All"
            }, {
                text: "View Project on Github",
                href: ""
            }],
            projectLink: "https://github.com/jainvandit99/Memes-For-All",
            isPinned: true
        }],
    unpinned: [{
            title: "Memestagram",
            brief: "Application to create, browse and upload memes.",
            img:"project-images/memestagram.png",
            projectLink: "https://github.com/jainvandit99/Memes-For-All",
            isPinned: false
        },
        {
            title: "Memestagram",
            brief: "Application to create, browse and upload memes.",
            img:"project-images/memestagram.png",
            projectLink: "https://github.com/jainvandit99/Memes-For-All",
            isPinned: false
        }]
}

const Projects = () => {
    const PinnedProjectData = ProjectData.pinned;
    const UnPinnedProjectData = ProjectData.unpinned;
    return(
        <div className="projectContainer" >
            <Row>
                <Col xs="12" md="7" style={{padding: "0"}}>
                    <Container style={{padding: "8px 2px"}}>
                        <p style={{fontSize:"18px"}}>SIDE PROJECTS</p>
                        <p style={{fontSize:"16px"}}>Outside of work, I enjoy building simple tools & 
                            products as an excuse to continue my passion in coding & 
                            learning new technology. Here are some of the projects I've launched so far.</p>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className="projectGrid" style={{padding: "0"}}>
                    {
                        PinnedProjectData.map(function(project, index){
                            return <PinnedProject data={project} />
                        })
                    }
                    <div style={{display: "grid", borderWidth:"0 0 1px 0", borderColor:"#eee", borderStyle:"solid"}}>
                        {
                            UnPinnedProjectData.map(function(project, index) {
                                return <UnPinnedProject data={project} />
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
            <div className="unpinned-project" >
                <Container style={{height:"100%", margin:"auto"}}>
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