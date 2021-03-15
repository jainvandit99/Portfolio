import React, { Component } from "react"
import ReactDOM from 'react-dom'
import {Row, Col} from 'react-bootstrap'
import './navbar.css'
import {Name,LinkedinIcon, GithubIcon, InstagramIcon, DribbbleIcon} from '../../assets/navbar-images/navbar-images'
// import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
      
    render(){
        return (
            <div className='navbarr'>
                <div id="linkContainer">
                    <Link link="linkedin.com/" id="linkedin"></Link>
                    <Link link="github.com/" id="github"></Link>
                    <Link link="instagram.com/" id="instagram"></Link>
                    <Link link="dribbble.com/" id="dribbble"></Link>
                </div>
                <div className="name">@jainvandit99</div>
                <NavBarIcon src={LinkedinIcon} id="linkedin" webLink="https://www.linkedin.com/in/jainvandit99"/>
                <NavBarIcon src={GithubIcon} id="github" webLink="https://www.github.com/jainvandit99"/>
                <NavBarIcon src={InstagramIcon} id="instagram" webLink="https://www.instagram.com/jainvandit99"/>
                <NavBarIcon src={DribbbleIcon} id="dribbble" webLink="https://www.dribbble.com/jainvandit99"/>
            </div>
        )
    }
}

function NavBarIcon(props) {
    let position = {
        linkedin: "0px",
        github: "-33.5px",
        instagram: "-67px",
        dribbble: "-101.5px"
    }
    function mouseOverIcon(){
        let element = document.getElementById(props.id)
        ReactDOM.findDOMNode(element).style.opacity = "100%"
        let container = document.getElementById("linkContainer")
        ReactDOM.findDOMNode(container).style.top = position[props.id]
    }

    function mouseOutOfIcon(){
        let element = document.getElementById(props.id)
        ReactDOM.findDOMNode(element).style.opacity = "0%"
    }
    return(
        <a href={props.webLink}><img className="navbarIcon" onMouseOver={mouseOverIcon} onMouseOut={mouseOutOfIcon} src={props.src}></img></a>
    )
}

class Link extends Component {

    render(){
        return (
            <div className="link" id={this.props.id}>{this.props.link}</div>
        )
    }
}

export default NavBar