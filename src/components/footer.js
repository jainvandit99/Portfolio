import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

class FooterQuote extends Component {
    render(){
        return (
            <div className="footer">
                <Row style={{height: "100%"}}>
                    <Col xs="2" style={{padding: "0"}}>
                        <Container>
                        <svg class="quote-icon" width="14" height="100%" viewBox="0 0 13 11" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.116h-2.844v-1.09c0-1.612.864-2.703 2.49-2.94V0C10.308.19 7.92 1.802 7.92 5.026V11H13V6.116zm-10.816 0v-1.09c0-1.612.914-2.703 2.54-2.94V0C2.386.19 0 1.802 0 5.026V11h5.078V6.116H2.184z" fill="#111515" fill-rule="evenodd"></path></svg>
                        </Container>
                    </Col>
                    <Col xs="10" style={{padding: "0"}} id="quote">
                        <p style={{float: "left", display: "inline-block"}}>He's a good kid, he calls to catch up every week <span style={{fontWeight: "600"}}> - Mum</span></p>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default FooterQuote;