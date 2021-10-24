import React from "react";
import { Chrono } from "react-chrono";
import { educationDetails, experienceDetails } from "../userDetails";
export default function EducationSection() {
  return (
    <>
      <div id='education' className="timeline description container-fluid row">
        {/* <h1 className="main-heading"></h1> */}
        <div className="education-details col-lg-6 col-md-6" style={{fontSize:'1.6rem'}}>
         <div className="main-heading heading">
           <div className="user-icon"></div>
         <h2>Education</h2>
         </div>
         <Chrono cardWidth="400"
            cardHeight="150" items={educationDetails} mode="VERTICAL"  hideControls="true"
            theme={{
              primary: "#23d997",
              secondary: "none",
              titleColor: "#23d997",
            }}>
  </Chrono>
          {/* <Chrono
            items={educationDetails}
            cardWidth="400"
            cardHeight="150"
            mode="VERTICAL"
            hideControls="true"
            theme={{
              primary: "#23d997",
              secondary: "none",
              titleColor: "#23d997",
            }}
          ></Chrono> */}
        </div>
        <div className="experience-details col-lg-6 col-md-6">
        <div className="heading">
        <h2 className='exp-title'>Experience</h2>
        </div>
        <Chrono cardWidth="400"
            cardHeight="150" items={experienceDetails} mode="VERTICAL"  hideControls="true"
            theme={{
              primary: "#23d997",
              secondary: "none",
              titleColor: "#23d997",
            }}>
  </Chrono>
          {/* <Chrono
            items={experienceDetails}
            cardWidth="400"
            cardHeight="150"
            mode="VERTICAL"
            useReadMore='false'
            hideControls="true"
            theme={{
              primary: "#23d997",
              secondary: "none",
              titleColor: "#23d997",
            }}
          ></Chrono> */}
        </div>
      </div>
    </>
  );
}
