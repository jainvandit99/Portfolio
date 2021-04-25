import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Landing extends Component {
    render(){
        return(
            <Container className="landing">
                <Row>
                    <Col xs={{span: "12", order: "second"}} md={{span: "7", order: "first"}}>
                        <Container className="landing-container">
                            <p>👋</p>
                            <p className="landing-heading">Hello! I'm Vandit Jain a student and software developer based out of Pune, India.</p>
                            <p> 
                            I'm an incoming graduate student at Carnegie Mellon University fall '21 batch and an Alumni of BITS Pilani batch of 2020. 
                            For the past 2 years, I've been working with various startup founders and helping them launch their products.</p>
                            <div className="landing-link" style={{display: "inline-flex"}}>
                                <a href="mailto:mailvandit.j@gmail.com">
                                    <p>
                                        Email
                                    </p>
                                </a>
                                <a href="./VanditJainResume.pdf" target="_blank">
                                    <p>
                                        Resume
                                    </p>
                                </a>
                                <a href="">
                                    <p>
                                        Blog
                                    </p>
                                </a>
                            </div>
                        </Container>
                    </Col>
                    <Col xs={{span: "7", order: "first"}} md={{span: "5", order: "second"}}  style={{marginLeft: "auto"}}>
                        <img className="profPic" src="/landing-images/VanditPic.jpeg"></img>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Landing