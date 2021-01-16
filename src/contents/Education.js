import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.E | Computer Science & Engineering" where="Sapthagiri College of Engineering" from="August 2017" to="Present"/>
			<Widecard title="HSC" where="G A High School" from="2015" to="2017"/>
            <Widecard title="SSLC" where="Sherwood School" from="2013" to="2014"/>
			
            </div>
            )
        }
    }
    
export default Education
    