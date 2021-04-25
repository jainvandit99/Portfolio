import React from 'react'
import { Component } from 'react'
import { Container } from 'react-bootstrap'
import styles from './Services.module.css'


const ServicesData = [
    {
        img: "/project-images/memestagram.png",
        serviceTitle: "Designing your digital product",
        serviceBrief: "From product design to strategy, design systems, UX or UI. I solve complex problems through design, so you can achieve your business goals."
    },{
        img: "/project-images/memestagram.png",
        serviceTitle: "Designing your digital product",
        serviceBrief: "From product design to strategy, design systems, UX or UI. I solve complex problems through design, so you can achieve your business goals."
    },{
        img: "/project-images/memestagram.png",
        serviceTitle: "Designing your digital product",
        serviceBrief: "From product design to strategy, design systems, UX or UI. I solve complex problems through design, so you can achieve your business goals."
    },{
        img: "/project-images/memestagram.png",
        serviceTitle: "Designing your digital product",
        serviceBrief: "From product design to strategy, design systems, UX or UI. I solve complex problems through design, so you can achieve your business goals."
    },{
        img: "/project-images/memestagram.png",
        serviceTitle: "Designing your digital product",
        serviceBrief: "From product design to strategy, design systems, UX or UI. I solve complex problems through design, so you can achieve your business goals."
    }
]

const Services = () => {
    return (
        <div className={styles.services}>
            <Container style={{margin: "48px auto 24px"}}>
                <h1>Things I'm (sort of!) good at...</h1>
            </Container>
            <Container>
                <Slider data={ServicesData}/>
            </Container>
            <Container style={{margin: "24px auto"}}>
                <h5>Want to know more? <a href="mailto:hi@vandit.studio">hi@vandit.studio</a></h5>
            </Container>
        </div>
    )
}

class Slider extends React.Component {
    sliderRef = React.createRef();
    componentDidMount() {
        Flickity = window.Flickity
        this.flickity = new Flickity(this.sliderRef.current, {
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            freeScroll: true,
            freeScrollFriction: 0.03
        })
    }

    render() {
        const { data } = this.props;

        return (
            <div ref={this.sliderRef}>
                {data.map(function(singleServiceData, index){
                    return <ServicesCard data={singleServiceData} key={index} />
                })}
            </div>
        )
    }
}


class ServicesCard extends Component {

    render(){
        return(
            <div className={styles.servicesCard}>
                <Container className={styles.servicesCardContainer}>
                    <img src={this.props.data.img}></img>
                    <h3>{this.props.data.serviceTitle}</h3>
                    <h5>{this.props.data.serviceBrief}</h5>
                </Container>
            </div>
        )
    }
}


export default Services