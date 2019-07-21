import React, { Component } from 'react';
import '../../../assets/styles/experience.css';
import { Col } from 'react-grid-system';

class ExpCard extends Component {
    render() {
        const classes = "exp_card " + this.props.extra_classes
        const img_class = "exp_logo " + (this.props.extra_classes === "mlse" ? "mlse-img" : "")
        return (
            <Col sm ={12} md ={6}>
            <div className = {classes} data-aos="fade-up" data-aos-duration = "500">
                <div className = {img_class}>
                    <img alt = {this.props.company} src = {this.props.img} />
                </div>
                <div className = "exp_date">
                {this.props.date}
                </div>
                <div className = "exp_company">
                {this.props.company}
                </div>
                <div className = "exp_title">
                {this.props.title}
                </div>
                <div className = "exp_desc">
                Lorem ipsum
                </div>
                <div className = "exp_view">
                </div>
            </div>
            </Col>
        );
    }
}

export default ExpCard;
