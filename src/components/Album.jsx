import React, { Component } from 'react';
import {Col, Image} from 'react-bootstrap'

class Album extends Component {
    render() { 
        return (   
            <div>
                <Col>
                    <Image src={this.props.source} alt="Image"/>
                        <p>{this.props.title}</p>
                </Col>
            </div>
         );
    }
}
 
export default Album;