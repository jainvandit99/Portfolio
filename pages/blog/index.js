import React from 'react'
import { Component } from 'react'
import {Row, Col, Container} from 'react-bootstrap' 
import Styles from './Blog.module.css'

export default function Blog(){
    return (
        <Container>
            <Row>
                <BlogCardLarge />
            </Row>
        </Container>
    )
}


class BlogCardLarge extends Component {
    render() {
        return (
            <Col sm="12" lg="6">
                <div className={Styles.blogcard}>

                </div>
            </Col>
        )
    }
}